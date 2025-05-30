import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function updateSpaces(
  event: APIGatewayProxyEvent,
  ddbClient: DynamoDBClient,
): Promise<APIGatewayProxyResult> {
  if (
    event.queryStringParameters &&
    event.body &&
    "id" in event.queryStringParameters
  ) {
    const spaceId = event.queryStringParameters["id"];
    const parsedBody: Record<string, unknown> = JSON.parse(event.body);
    const requestBodyKey = Object.keys(parsedBody)[0] || "";
    const requestBodyValue = parsedBody[requestBodyKey];

    const updateResult = await ddbClient.send(
      new UpdateItemCommand({
        TableName: process.env.SPACES_TABLE,
        Key: {
          id: { S: spaceId } as any,
        },
        UpdateExpression: "SET #zzzNew = :value",
        ExpressionAttributeValues: {
          ":value": { S: requestBodyValue as string },
        },
        ExpressionAttributeNames: {
          "#zzzNew": requestBodyKey,
        },
        ReturnValues: "UPDATED_NEW",
      }),
    );

    return {
      statusCode: 204,
      body: JSON.stringify(updateResult.Attributes!),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify("Please provide right args!!"),
  };
}
