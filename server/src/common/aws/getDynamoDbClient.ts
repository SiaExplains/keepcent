
import { DynamoDBClient, DynamoDB } from "@aws-sdk/client-dynamodb";
import { Injectable } from "@nestjs/common";
import { AWS_CREDENTIAL_PROFILE, AWS_REGION } from "../constants";
const {fromIni} = require("@aws-sdk/credential-providers");


type DyanamoUtil = {
  client: DynamoDBClient;
  server: DynamoDB;
}
@Injectable()
export class DynamoDbClientService {
  private ddbClient: DynamoDBClient;
  private ddb: DynamoDB;

  getInstance(): DyanamoUtil {
    if(!this.ddbClient) {
      this.ddbClient = new DynamoDBClient({ 
        region: AWS_REGION,
        credentials: fromIni({profile: AWS_CREDENTIAL_PROFILE}) 
      });
    }
    if(!this.ddb) {
      this.ddb = new DynamoDB({
        region: AWS_REGION,
        credentials: fromIni({profile: AWS_CREDENTIAL_PROFILE}) 
      });
    }

    return { client: this.ddbClient , server: this.ddb} ;
  }

}

export default DynamoDbClientService;
