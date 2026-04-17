import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'; // bring in the DynamoDB tools so I can create a DynamoDB table in CDK
import * as s3 from 'aws-cdk-lib/aws-s3'; // bring in the S3 tools so I can create an S3 bucket in CDK

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

    // S3 bucket for storing frontend/static website files later
    // create a new S3 bucket inside the current stack
    const frontendBucket = new s3.Bucket(this, 'TaskTrailFrontendBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY, // if I later delete this stack, delete this bucket too
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL, // do not allow public access to this bucket
      encryption: s3.BucketEncryption.S3_MANAGED, // store bucket data with AWS-managed encryption
      versioned: false,
    });
  }
}