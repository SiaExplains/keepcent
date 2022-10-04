import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CategoryRepository } from 'src/repositories/transaction/category.repository';
import { Category } from 'src/types/category.model';
import { uuid } from 'src/common/uuid';
import { UserRepository } from 'src/repositories/user/user.repository';
import { User } from 'src/types/user.model';
import * as md5 from 'md5';
import { AuthenticationStatus, AuthResponse } from 'src/types/auth-response.model';

@Controller()
export class UserController {
  constructor(
    private readonly userRepository: UserRepository) { }

  @Post("/signup")
  async signup(@Body() user: User): Promise<string> {
    try {
        console.log('[POST] /category');
        const slugKey = `USR-${uuid()}`;
        const response =  this.userRepository.insert({
          ...user,
          password: md5(user.password),
          userId: slugKey,
        })
        return JSON.stringify(response);
    }
    catch(error) {
        return JSON.stringify({ Error: error?.message ?? error})
    }
  } 


  @Post("/login")
  async login(@Body() user: User): Promise<AuthResponse> {
    try {
      console.log('[POST] /login');
        const userStatus = await this.userRepository.getByUserName(user);
        if(userStatus){
            const token = `token_${uuid()}`;
            return { 
              status: AuthenticationStatus.Authenticated, 
              token, 
              userInfo: userStatus
             }
        }
        else {
            return { status: AuthenticationStatus.NotAuthenticated }
        }
    } catch (error) {
        console.log(error)
        return { status: AuthenticationStatus.NotAuthenticated }
    }
  }

}
