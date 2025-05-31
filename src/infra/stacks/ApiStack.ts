import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface ApiStackProps extends StackProps {
  spacesLambdaIntegration: LambdaIntegration;
}

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    // Define your stack resources here

    const api = new RestApi(this, "SpacesApi");
    const spacesResource = api.root.addResource("spaces");
    spacesResource.addMethod("GET", props.spacesLambdaIntegration); // GET /spaces
    spacesResource.addMethod("POST", props.spacesLambdaIntegration); // POST /spaces
    spacesResource.addMethod("PUT", props.spacesLambdaIntegration); // PUT /spaces
    spacesResource.addMethod("DELETE", props.spacesLambdaIntegration); // DELETE /spaces
  }
}
