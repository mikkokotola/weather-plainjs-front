#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WeatherfrontAppStack } from '../lib/weather-front-stack';

const app = new cdk.App();
new WeatherfrontAppStack(app, 'WeatherfrontAppStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});