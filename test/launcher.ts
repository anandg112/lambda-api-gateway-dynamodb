import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.SPACES_TABLE = "SpaceStack-0eb8826c64a5";

handler(
  {
    httpMethod: "PUT",
    queryStringParameters: { id: "6638206c-c210-4945-8158-0d797231efed" },
    body: JSON.stringify({ location: "Milan" }),
  } as any,
  {} as any,
);
