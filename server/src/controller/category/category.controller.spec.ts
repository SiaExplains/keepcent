import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { AppService } from '../../services/category/app.service';

describe('AppController', () => {
  let appController: CategoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [AppService],
    }).compile();

    appController = app.get<CategoryController>(CategoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
