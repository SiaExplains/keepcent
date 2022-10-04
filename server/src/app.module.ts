import { Module } from '@nestjs/common';
import { DynamoDbClientService } from './common/aws/getDynamoDbClient';
import { CategoryController } from './controller/category/category.controller';
import { UserController } from './controller/user/user.controller';
import { CategoryRepository } from './repositories/transaction/category.repository';
import { UserRepository } from './repositories/user/user.repository';

@Module({
  imports: [],
  controllers: [CategoryController, UserController],
  providers: [DynamoDbClientService, CategoryRepository, UserRepository],
})
export class AppModule {}
