import { Module } from '@nestjs/common';
import { MoonController } from './moon.controller';
import { MoonService } from './moon.service';

@Module({
  imports: [],
  controllers: [MoonController],
  providers: [MoonService],
})
export class MoonModule {}
