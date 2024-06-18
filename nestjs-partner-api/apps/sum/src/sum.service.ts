import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  getHello(): string {
    return 'Hello World!';
  }
}
