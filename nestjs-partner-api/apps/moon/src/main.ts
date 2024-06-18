import { NestFactory } from '@nestjs/core';
import { MoonModule } from './moon.module';

async function bootstrap() {
  const app = await NestFactory.create(MoonModule);
  await app.listen(3001);
}
bootstrap();
