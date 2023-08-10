# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template



https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html

1- Bootstrap AWS environment:
Use the AWS Cloud Development Kit (CDK) to bootstrap your environment for deploying infrastructure.

`npx cdk bootstrap aws://ACCOUNT-NUMBER/REGION --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess`


2- Initialize project:

`git clone GITHUB_CLONE_URL YOUR_PROJECT_NAME'

3- initialize cdk 
`cdk init app --language typescript`

4-Store the Github token in secret manager



// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "GitHubToken";

const client = new SecretsManagerClient({
  region: "ca-central-1",
});

let response;

try {
  response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    })
  );
} catch (error) {
  // For a list of exceptions thrown, see
  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
  throw error;
}

const secret = response.SecretString;

// Your code goes here