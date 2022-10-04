import {   
    DeleteItemCommandInput, 
    DynamoDBClient, 
    GetItemCommand, 
    GetItemCommandInput, 
    PutItemCommand, 
    PutItemCommandInput ,
    DynamoDB,
    ScanCommandInput
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { Injectable } from "@nestjs/common";
import DynamoDbClientService from "src/common/aws/getDynamoDbClient";
import { Category } from "src/types/category.model";
import { User } from "src/types/user.model";
import * as md5 from 'md5';
import { filter, find } from "lodash";

@Injectable()
export class UserRepository {
    private readonly TABLE_NAME = 'user'; 
    private dynamoDbClient: DynamoDBClient;
    private dynamoDb: DynamoDB;

    constructor(private readonly _dynamoDb: DynamoDbClientService) {
        const { client, server } = this._dynamoDb.getInstance();
        this.dynamoDbClient = client;
        this.dynamoDb = server;
    }
    insert(user: User) {
        const params: PutItemCommandInput = {
            TableName:  this.TABLE_NAME,
            Item: marshall({...user})
        };
        return this.dynamoDbClient.send(new PutItemCommand(params))
    }

    /*
            ExpressionAttributeValues: {
              ':userName': {S: user.userName},
              ':password' : {S:  md5(user.password)}
            },
            KeyConditionExpression: 'userName = :userName and Password > :password',
    */
    async getByUserName(user: User): Promise<User | null> {
        
        const params: ScanCommandInput = {
            TableName:  this.TABLE_NAME,
 

        };
        const result = await this.dynamoDb.scan(params);
        const { Items } = result;
        const userStatus = filter(Items, {
            userName : {S : user.userName}, 
            password: {S: md5(user.password)}});
        if(userStatus && userStatus.length > 0) {
            const userModel: any = userStatus[0];
            return {
                userId: userModel.userId.S,
                userName: userModel.userName.S,
                password: md5(user.password),
                firstName: userModel.firstName.S,
                lastName: userModel.lastName.S,
                email:userModel.email.S,
            }
        }

        return null;
    };

    async getUserById(userId: string, userName: string): Promise<User | null> {
        const params = {
            TableName:  this.TABLE_NAME,
            Key: {
                "userId": {S: userId},
                "userName": {S: userName}
            }
          };
        const userData = await this.dynamoDb.getItem(params);
        if(userData && userData.Item) {
            return {
                userId: userData.Item.userId.S,
                lastName: userData.Item.lastName.S,
                userName: userData.Item.userName.S,
                email: userData.Item.email.S,
                firstName: userData.Item.firstName.S,
                password: userData.Item.password.S,
            }
        }

       return null;
    }
}