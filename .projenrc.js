const { AwsCdkConstructLibrary, TextFile } = require('projen');

const nodejsVersion = '14.17.6';

const project = new AwsCdkConstructLibrary({
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: '@almamedia-open-source/cdk-project-context',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-project-context.git',
  minNodeVersion: nodejsVersion,
  constructsVersion: '10.0.0',

  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib'],

});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.synth();
