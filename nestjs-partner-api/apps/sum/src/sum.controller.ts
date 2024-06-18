import { Controller, Get } from '@nestjs/common';
import { SumService } from './sum.service';

@Controller()
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Get()
  getHello(): string {
    return this.sumService.getHello();
  }
}
