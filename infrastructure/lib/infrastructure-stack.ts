import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'; // bring in the DynamoDB tools so I can create a DynamoDB table in CDK

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a new DynamoDB table inside this stack
    const tasksTable = new dynamodb.Table(this, 'TaskTrailTasksTable', {
      tableName: 'TaskTrailTasks',
      // group task data by user
      partitionKey: {
        name: 'userId',
        type: dynamodb.AttributeType.STRING,
      },
      // This allows each user to have many tasks.
      sortKey: {
        name: 'taskId',
        type: dynamodb.AttributeType.STRING,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // only pay when the table is actually used
      removalPolicy: cdk.RemovalPolicy.DESTROY, // if I delete this stack later, also delete the table
    });
  }
}