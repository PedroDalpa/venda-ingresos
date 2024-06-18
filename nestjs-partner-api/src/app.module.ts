import { Module } from '@nestjs/common';
import { EventsModule } from '../libs/core/src/events/events-core.module';
import { PrismaModule } from './prisma/prisma.module';
import { SpotsModule } from '../libs/core/src/spots/spots-core.module';

@Module({
  imports: [EventsModule, PrismaModule, SpotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
