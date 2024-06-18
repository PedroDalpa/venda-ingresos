import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReserveSpotDto } from './dto/reserve-spot.dto';
import { Prisma, SpotStatus, TicketStatus } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({ data: createEventDto });
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({ where: { id } });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      data: updateEventDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.event.delete({ where: { id } });
  }

  async reserveSpot(
    { email, spots, ticket_kind }: ReserveSpotDto,
    eventId: string,
  ) {
    const spotsIsReserved = await this.prismaService.spot.findMany({
      where: {
        eventId,
        name: {
          in: spots,
        },
      },
    });

    if (spotsIsReserved.length !== spots.length) {
      const reservedSpotsName = spotsIsReserved.map((spot) => spot.name);
      const notFoundSpotsName = spots.filter(
        (spotName) => !reservedSpotsName.includes(spotName),
      );
      throw new Error(`Spots ${notFoundSpotsName.join(', ')} not found`);
    }

    try {
      const tickets = await this.prismaService.$transaction(
        async (prisma) => {
          await prisma.reservationHistory.createMany({
            data: spotsIsReserved.map((spot) => ({
              spotId: spot.id,
              ticketKind: ticket_kind,
              email: email,
              status: TicketStatus.reserved,
            })),
          });

          await prisma.spot.updateMany({
            data: {
              status: SpotStatus.reserved,
            },
            where: {
              id: {
                in: spotsIsReserved.map((spot) => spot.id),
              },
            },
          });

          const tickets = await Promise.all(
            spotsIsReserved.map((spot) =>
              prisma.ticket.create({
                data: {
                  spotId: spot.id,
                  ticketKind: ticket_kind,
                  email: email,
                },
              }),
            ),
          );
          return tickets;
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted },
      );

      return tickets;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new Error('Spot already reserved');
          case 'P2034':
            throw new Error('Some spots are already reserved');
        }
      }
      throw error;
    }
  }
}
