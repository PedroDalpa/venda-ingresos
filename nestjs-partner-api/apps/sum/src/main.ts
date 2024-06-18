import { NestFactory } from '@nestjs/core';
import { SumModule } from './sum.module';

async function bootstrap() {
  const app = await NestFactory.create(SumModule);
  await app.listen(3000);
}
bootstrap();
