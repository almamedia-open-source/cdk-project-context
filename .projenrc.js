const { AwsCdkConstructLibrary, TextFile, NpmAccess } = require('projen');

const nodejsVersion = '14.17.6';

const project = new AwsCdkConstructLibrary({

  // Metadata
  stability: 'experimental',
  authorName: 'Alma Media',
  authorOrganization: true,
  authorAddress: 'opensource@almamedia.dev',
  name: '@almamedia-open-source/cdk-project-context',
  repositoryUrl: 'https://github.com/almamedia-open-source/cdk-project-context.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  npmAccess: NpmAccess.PUBLIC,

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.0.0',
  constructsVersion: '10.0.0',
  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['constructs', 'aws-cdk-lib'],

  // Gitignore
  gitignore: ['.DS_Store'],

});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.synth();
