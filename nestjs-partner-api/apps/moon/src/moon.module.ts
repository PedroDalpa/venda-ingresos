import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.moon',
      isGlobal: true,
    }),
    PrismaModule,
    EventosModule,
    LugaresModule,
  ],
})
export class MoonModule {}
