import { Module } from '@nestjs/common';
import { SumController } from './sum.controller';
import { SumService } from './sum.service';

@Module({
  imports: [],
  controllers: [SumController],
  providers: [SumService],
})
export class SumModule {}
