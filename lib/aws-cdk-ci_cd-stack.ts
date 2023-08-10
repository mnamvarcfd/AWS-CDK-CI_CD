import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { PipelineAppStage } from './aws-cdk-ci_cd-app-stack';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';


export class AwsCdkCiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'MyFirstPipeline', {
      pipelineName: 'MyPipeline',
      crossAccountKeys: false,
      synth: new ShellStep('Synth', {
      input: CodePipelineSource.gitHub('mnamvarcfd/AWS-CDK-CI_CD', 'main'),
      commands: ["npm ci", "npm run build", "npx cdk synth"]
      })
    });


    const developStage = pipeline.addStage( new PipelineAppStage(this, 'development', {
      env: { account: '123456789012', region: 'ca-central-1' } 
    }));


    developStage.addPost(new ManualApprovalStep('ApproveDevelopManually'));

    const productionStage = pipeline.addStage( new PipelineAppStage(this, 'production', {
      env: { account: '123456789012', region: 'ca-central-1' } 
    })

    );

  }
}
