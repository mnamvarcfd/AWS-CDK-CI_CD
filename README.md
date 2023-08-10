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



1- Bootstrap AWS environment:
Use the AWS Cloud Development Kit (CDK) to bootstrap your environment for deploying infrastructure.

`npx cdk bootstrap aws://<account_number>/<region> --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess`

2- Initialize project:

`git clone GITHUB_CLONE_URL YOUR_PROJECT_NAME'

3- initialize cdk 
`cdk init app --language typescript`