import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: "us-east-1" });

async function handler(event: APIGatewayProxyEvent, context: Context) {
  const command = new ListBucketsCommand({});
  const listBucketResult = (await s3Client.send(command)).Buckets?.map(
    (bucket) => bucket.Name,
  );

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Hello from Lambda!, here are your buckets: " +
        JSON.stringify(listBucketResult),
    }),
  };
  console.log("Event: ", event);
  return response;
}

export { handler };
