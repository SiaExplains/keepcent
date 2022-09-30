import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../services/category/app.service';
import { ddbClient } from '../../common/db/dbClient';
import * as AWS from 'aws-sdk';
import { PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";



@Controller()
export class CategoryController {
  constructor(private readonly appService: AppService) {}



  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/cat")
  async getCategory(): Promise<string[]> {
    console.log('recived a request for /cat');

      const params: PutItemCommandInput = {
        TableName: "categories",
        Item: marshall({
          key: "niush",
          title: "niush is ok",
          categorySlug: "niushaaaaa"
        })
    };
    
      
      const x = await ddbClient.send(new PutItemCommand(params));
      console.log(x);
      return ['ali', 'reza', 'siavash']
    }
    // return ['ali', 'reza', 'siavash'];
  
}
