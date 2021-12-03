const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Ari Palo',
  authorAddress: 'ari.palo@almamedia.fi',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: '@almamedia-open-source/cdk-project-context',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-project-context.git',

  constructsVersion: '10.0.0',

  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib', '@types/change-case', '@types/tv4'],

  bundledDeps: ['change-case', 'tv4'],
});
project.synth();
