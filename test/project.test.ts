//import { App, AppProps, Annotations } from 'aws-cdk-lib';
//import { Construct } from 'constructs';
import { Project } from '../src/project';
import { resetRegionEnvironmentalVariables } from './utils/reset-region';

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

describe('Project initialization', () => {

  beforeEach(resetRegionEnvironmentalVariables);
  afterEach(resetRegionEnvironmentalVariables);

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

