import { Test, TestingModule } from '@nestjs/testing';
import { MoonController } from './moon.controller';
import { MoonService } from './moon.service';

describe('MoonController', () => {
  let moonController: MoonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MoonController],
      providers: [MoonService],
    }).compile();

    moonController = app.get<MoonController>(MoonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moonController.getHello()).toBe('Hello World!');
    });
  });
});
