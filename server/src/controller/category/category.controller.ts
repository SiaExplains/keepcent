import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CategoryRepository } from 'src/repositories/transaction/category.repository';
import { Category } from 'src/types/category.model';
import { uuid } from 'src/common/uuid';
import { UserRepository } from 'src/repositories/user/user.repository';
import { isEmpty } from 'lodash';


@Controller()
export class CategoryController {
  constructor(
    private readonly categoryRepository: CategoryRepository, 
    private readonly userRepository: UserRepository
    ) { }

  @Get()
  getHello(): string {
    return 'Hello Wordl!'
  }

  @Post("/category")
  async addCategory(@Body() category: Category): Promise<string> {
    console.log('[POST] /category');
    if(!category || isEmpty(category.userId)) {
      return 'please enter valid data';
    }
    const user = await this.userRepository.getUserById(category.userId, category.userName);
    
    if(!user) {
      return 'invalid userId or userName';
    }

    const slugKey = `CAT-${uuid()}`;
    const response =  this.categoryRepository.insert({
      ...category,
      categoryId: slugKey,
      userId: category.userId
    })
    return JSON.stringify('Category Added');
  }  

  // @Get("/category")
  // async getCategory() {

  // }

  @Delete("/category")
  async deleteCategory(@Body() category: Category): Promise<string> {
    console.log('[DELETE] /category');
    const response =  this.categoryRepository.deleteByKey(category.categoryId);
    return JSON.stringify(response);
  }
}
