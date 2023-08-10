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

 aws secretsmanager create-secret --name github-token --secret-string YOUR-SECRECT-TOKEN-FROM-GITHUB --region YOUR-REGION 



// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample
// code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html

// Make sure to import the following packages in your code
// import software.amazon.awssdk.regions.Region;
// import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient;
// import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest;
// import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueResponse;	

public static void getSecret() {

    String secretName = "github-token";
    Region region = Region.of("ca-central-1");

    // Create a Secrets Manager client
    SecretsManagerClient client = SecretsManagerClient.builder()
            .region(region)
            .build();

    GetSecretValueRequest getSecretValueRequest = GetSecretValueRequest.builder()
            .secretId(secretName)
            .build();

    GetSecretValueResponse getSecretValueResponse;

    try {
        getSecretValueResponse = client.getSecretValue(getSecretValueRequest);
    } catch (Exception e) {
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        throw e;
    }

    String secret = getSecretValueResponse.secretString();

    // Your code goes here.
}