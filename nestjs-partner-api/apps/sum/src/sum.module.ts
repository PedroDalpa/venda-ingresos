import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../../../libs/core/src/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.sum', isGlobal: true }),
    PrismaModule,
    EventsModule,
    SpotsModule,
  ],
})
export class SumModule {}
