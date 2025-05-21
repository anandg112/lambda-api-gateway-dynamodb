import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

async function handler(
  event: APIGatewayProxyEvent,
  _context: Context,
): Promise<APIGatewayProxyResult> {
  let message: string;
  switch (event.httpMethod) {
    case "GET":
      message = `Hello from GET!`;
      break;
    case "POST":
      message = `Hello from POST!`;
      break;
    default:
      message = "Method not supported";
      break;
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  console.log("Event: ", event);
  return response;
}

export { handler };
