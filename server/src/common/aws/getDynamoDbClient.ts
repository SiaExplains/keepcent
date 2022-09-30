import * as AWS from 'aws-sdk';
const { fromIni } = require("@aws-sdk/credential-providers");

let s3Client: any;

const getS3Client = () => {
  if (!s3Client) {
    s3Client = new AWS.S3({
      credentials: fromIni({profile: 'keep-cent'})
    });
  }
  return s3Client;
};

export default getS3Client;