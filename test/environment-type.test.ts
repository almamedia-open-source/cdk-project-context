import { Stack } from 'aws-cdk-lib';
import { EnvironmentType } from '../src/environment-type';
import { Project } from '../src/project';

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
      environments: ['development', 'feature/.*', 'staging'],
      config: {
        baseDomain: 'example.net',
        some: {
          deep: {
            object: 'foo',
          },
        },
      },
    },
    prod: {
      id: '222222222222',
      environments: ['production'],
      config: {
        baseDomain: 'example.com',
        some: {
          deep: {
            object: 'foo',
          },
        },
      },
    },
  },
};

describe('EnvironmentType', () => {

  const accountType = 'dev';
  const environmentType = 'development';

  test('try get', () => {
    const project = new Project({ ...config, context: { account: accountType, environment: environmentType } });
    const stack = new Stack(project, 'MyStack');
    expect(stack.node.tryGetContext('account')).toBe(accountType);
    expect(stack.node.tryGetContext('environment')).toBe(environmentType);

    expect(EnvironmentType.tryGet(stack)).toBe(environmentType);
  });

  test('get with allowed list filter', () => {
    const project = new Project({ ...config, context: { account: accountType, environment: environmentType } });
    const stack = new Stack(project, 'MyStack');
    expect(stack.node.tryGetContext('account')).toBe(accountType);
    expect(stack.node.tryGetContext('environment')).toBe(environmentType);

    expect(EnvironmentType.get(stack, config.accounts.dev.environments)).toBe(environmentType);
  });
});
