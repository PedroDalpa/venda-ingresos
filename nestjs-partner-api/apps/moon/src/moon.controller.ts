import { Controller, Get } from '@nestjs/common';
import { MoonService } from './moon.service';

@Controller()
export class MoonController {
  constructor(private readonly moonService: MoonService) {}

  @Get()
  getHello(): string {
    return this.moonService.getHello();
  }
}
