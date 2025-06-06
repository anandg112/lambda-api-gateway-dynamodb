import { App } from "aws-cdk-lib";
import { DataStack } from "./infra/stacks/DataStack";
import { LambdaStack } from "./infra/stacks/LambdaStack";
import { ApiStack } from "./infra/stacks/ApiStack";
const app = new App();

const dataStack = new DataStack(app, "DataStack");
const lambdaStack = new LambdaStack(app, "LambdaStack", {
  spacesTable: dataStack.spacesTable,
});
new ApiStack(app, "ApiStack", {
  spacesLambdaIntegration: lambdaStack.spacesLambdaIntegration,
});
