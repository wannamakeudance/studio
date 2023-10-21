#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const  {HelloStack }= require('../lib/aws-stack');

const app = new cdk.App();
new HelloStack(app, 'HelloStack', {
    env: { account: '426242916507', region: 'ap-southeast-2' },
});
