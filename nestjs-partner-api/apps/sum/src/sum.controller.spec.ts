import { Test, TestingModule } from '@nestjs/testing';
import { SumController } from './sum.controller';
import { SumService } from './sum.service';

describe('SumController', () => {
  let sumController: SumController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SumController],
      providers: [SumService],
    }).compile();

    sumController = app.get<SumController>(SumController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sumController.getHello()).toBe('Hello World!');
    });
  });
});
