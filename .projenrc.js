const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: '@almamedia-open-source/cdk-project-context',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-project-context.git',

  constructsVersion: '10.0.0',

  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib'],

});
project.synth();
