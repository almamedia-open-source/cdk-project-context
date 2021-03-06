const { awscdk, TextFile, javascript } = require('projen');

const nodejsVersion = '14.17.6';

const project = new awscdk.AwsCdkConstructLibrary({

  // Metadata
  stability: 'experimental',
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  name: '@almamedia-open-source/cdk-project-context',
  description: 'Opinionated CDK utility construct for managing project information & AWS account-specific configuration.',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-project-context.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws'],
  copyrightOwner: 'Alma Media Corporation',
  license: 'Apache-2.0',

  // Publish configuration
  defaultReleaseBranch: 'main',
  npmAccess: javascript.NpmAccess.PUBLIC,

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.0.0',
  constructsVersion: '10.0.0',
  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib', 'lodash', '@types/lodash'],
  bundledDeps: ['lodash'],

  // Gitignore
  gitignore: ['.DS_Store'],

});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.synth();
