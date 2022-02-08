import { Stack } from 'aws-cdk-lib';
import { Project } from '../src/project';
import { ProjectContext } from '../src/project-context';

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
      },
    },
    prod: {
      id: '222222222222',
      environments: ['production'],
      config: {
        baseDomain: 'example.com',
      },
    },
  },
};

describe('Project Context', () => {

  const accountType = 'dev';

  test('Account Type', () => {
    const project = new Project({ ...config, context: { account: accountType } });
    const stack = new Stack(project, 'MyStack');
    expect(stack.node.tryGetContext('account')).toBe(accountType);
    const type = ProjectContext.getAccountType(stack);
    expect(type).toBe(accountType);
  });

  test('Account ID', () => {
    const project = new Project({ ...config, context: { account: accountType } });
    const stack = new Stack(project, 'MyStack');
    expect(stack.node.tryGetContext('account')).toBe(accountType);
    const id = ProjectContext.getAccountId(stack);
    expect(id).toBe(config.accounts[accountType].id);
  });

  test('Account Config', () => {
    const project = new Project({ ...config, context: { account: accountType } });
    const stack = new Stack(project, 'MyStack');
    expect(stack.node.tryGetContext('account')).toBe(accountType);
    const baseDomain = ProjectContext.getAccountConfig(stack, 'baseDomain');
    expect(baseDomain).toBe(config.accounts[accountType].config.baseDomain);
  });

  /*
  test('foo', () => {
    const vastaus = ProjectContext.foo(config.accounts, 'development');
    expect(vastaus).toBe('dev');
  });


  test('Get Account Type by Environment Type', () => {
    const project = new Project({ ...config, context: { environment: 'development' } });
    const stack = new Stack(project, 'MyStack');
    const type = ProjectContext.getAccountTypeByEnvironment(stack, 'development');
    expect(type).toBe(accountType);
  });
  */


  // TODO add tests for all the methods
  //test('', () => {})

});


