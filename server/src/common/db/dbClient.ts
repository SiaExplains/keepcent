// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const {fromIni} = require("@aws-sdk/credential-providers");
// Set the AWS Region.
const REGION = "eu-west-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION,   credentials: fromIni({profile: 'keep-cent'}) });
export { ddbClient };


// const {fromIni} = require("@aws-sdk/credential-providers");
// const s3Client = new S3.S3Client({
//   credentials: fromIni({profile: 'work-account'})
// });