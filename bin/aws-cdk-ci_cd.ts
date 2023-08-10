#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkCiCdStack } from '../lib/aws-cdk-ci_cd-stack';

const app = new cdk.App();
new AwsCdkCiCdStack(app, 'AwsCdkCiCdStack', {

  env: { account: '919622682568', region: 'ca-canada-1' },



});