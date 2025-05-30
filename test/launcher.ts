import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "us-east-1";
process.env.SPACES_TABLE = "SpaceStack-0eb8826c64a5";

handler(
  {
    httpMethod: "DELETE",
    queryStringParameters: { id: "a488fce0-e97d-46c3-a77c-6d52ce6e7dea" },
  } as any,
  {} as any,
);
