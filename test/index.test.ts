//import { App, AppProps, Annotations } from 'aws-cdk-lib';
//import { Construct } from 'constructs';
import { Project, resolveDefaultRegion } from '../src/index';

const config = {
  name: 'foo',
  author: {
    organization: 'Acme Corp',
    name: 'Mad Scientists',
    email: 'mad.scientists@acme.example.com',
  },
  accounts: {
    dev: {
      id: '111111111111',
      config: {
        baseDomain: 'example.net',
      },
    },
    prod: {
      id: '222222222222',
      config: {
        baseDomain: 'example.com',
      },
    },
  },
};

describe('Default region selection', () => {
  beforeEach(() => {
    process.env.CDK_DEFAULT_REGION = undefined;
    process.env.AWS_REGION = undefined;
  });

  afterEach(() => {
    process.env.CDK_DEFAULT_REGION = undefined;
    process.env.AWS_REGION = undefined;
  });

  test('without region', () => {
    expect(resolveDefaultRegion({ ...config })).toBe('us-east-1');
  });

  test('without explicit region', () => {
    expect(resolveDefaultRegion({ ...config, defaultRegion: 'eu-west-1' })).toBe('eu-west-1');
  });

  test('with region via CDK_DEFAULT_REGION', () => {
    process.env.CDK_DEFAULT_REGION = 'eu-north-1';
    expect(resolveDefaultRegion({ ...config })).toBe('eu-north-1');
  });

  test('with region via AWS_REGION', () => {
    process.env.AWS_REGION = 'eu-central-1';
    expect(resolveDefaultRegion({ ...config })).toBe('eu-central-1');
  });
});


describe('Project initialization', () => {

  beforeEach(() => {
    process.env.CDK_DEFAULT_REGION = undefined;
    process.env.AWS_REGION = undefined;
  });

  afterEach(() => {
    process.env.CDK_DEFAULT_REGION = undefined;
    process.env.AWS_REGION = undefined;
  });

  test('without region', () => {
    const project = new Project({ ...config });
    expect(project.node.tryGetContext(Project.CONTEXT_SCOPE)).toMatchObject({ ...config, defaultRegion: 'us-east-1' });
  });

  test('with explicit region', () => {
    const project = new Project({ ...config, defaultRegion: 'eu-west-1' });
    expect(project.node.tryGetContext(Project.CONTEXT_SCOPE)).toMatchObject({ ...config, defaultRegion: 'eu-west-1' });
  });

  test('with region via CDK_DEFAULT_REGION', () => {
    process.env.CDK_DEFAULT_REGION = 'eu-north-1';
    const project = new Project({ ...config });
    expect(project.node.tryGetContext(Project.CONTEXT_SCOPE)).toMatchObject({ ...config, defaultRegion: 'eu-north-1' });
  });

  test('with region via AWS_REGION', () => {
    process.env.AWS_REGION = 'eu-central-1';
    const project = new Project({ ...config });
    expect(project.node.tryGetContext(Project.CONTEXT_SCOPE)).toMatchObject({ ...config, defaultRegion: 'eu-central-1' });
  });

});

