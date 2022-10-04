import {   
    DeleteItemCommandInput, 
    DynamoDBClient, 
    GetItemCommand, 
    GetItemCommandInput, 
    PutItemCommand, 
    PutItemCommandInput ,
    DynamoDB
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { Injectable } from "@nestjs/common";
import DynamoDbClientService from "src/common/aws/getDynamoDbClient";
import { Category } from "src/types/category.model";

@Injectable()
export class CategoryRepository {
    private readonly TABLE_NAME = 'category'; 
    private dynamoDbClient: DynamoDBClient;
    private dynamoDb: DynamoDB;

    constructor(private readonly _dynamoDb: DynamoDbClientService) {
        const { client, server } = this._dynamoDb.getInstance();
        this.dynamoDbClient = client;
        this.dynamoDb = server;
    }
    insert(category: Category) {
        const params: PutItemCommandInput = {
            TableName:  this.TABLE_NAME,
            Item: marshall({...category})
        };
  
        return this.dynamoDbClient.send(new PutItemCommand(params))
    }

    getByKey(slug: string) {
        const params: GetItemCommandInput= {
            Key: marshall({categorySlug: slug}),
            TableName: this.TABLE_NAME
        }
        return this.dynamoDbClient.send(new GetItemCommand(params));
    }

    deleteByKey(slug: string) {
        const params: DeleteItemCommandInput = {
            Key: marshall({categorySlug: slug, key: slug}),
            TableName: this.TABLE_NAME
        }
        return this.dynamoDb.deleteItem(params);
        //return this.dynamoDbClient.send(new DeleteItemCommand(params));
    }

    updateByKey() {

    }
}


