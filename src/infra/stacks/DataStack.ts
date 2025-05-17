import { Stack } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";

import { Construct } from "constructs";
import { getSuffixFromStack } from "../utils";

export class DataStack extends Stack {
  public readonly spacesTable: ITable;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const suffix = getSuffixFromStack(this);

    // Define your stack resources here
    this.spacesTable = new Table(this, "SpacesTable", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      tableName: `SpaceStack-${suffix}`,
    });
  }
}
