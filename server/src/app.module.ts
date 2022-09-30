import { Module } from '@nestjs/common';
import { CategoryController } from './controller/category/category.controller';
import { AppService } from './services/category/app.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [AppService],
})
export class AppModule {}
