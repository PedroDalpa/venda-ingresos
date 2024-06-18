import { Injectable } from '@nestjs/common';

@Injectable()
export class MoonService {
  getHello(): string {
    return 'Hello World!';
  }
}
