import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';


export class AwsCdkCiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'MyFirstPipeline', {
      pipelineName: 'MyPipeline',
      crossAccountKeys: false,
      synth: new ShellStep('Synth', {
      input: CodePipelineSource.gitHub('mohamed-ali-elsharawy/aws-cdk-ci_cd', 'main'),
      commands: ["npm ci", "npm run build", "npx cdk synth"]
      })
    });


  }
}
