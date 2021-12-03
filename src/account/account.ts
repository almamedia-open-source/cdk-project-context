import { AssertionError } from 'assert';
import { camelCase } from 'change-case';
import { Construct } from 'constructs';

type Configuration = Record<string, any>;

export interface IAccount {
  readonly type: string;
  readonly id: string;
  readonly configuration: Configuration;
}

export class AccountContext implements IAccount {
  readonly type: string;
  readonly id: string;
  readonly configuration: Configuration;

  constructor(scope: Construct) {
    this.type = this.getAccountType(scope);
    this.configuration = this.getAccountConfiguration(scope, this.type);
    this.id = this.getAccountId(this.configuration);
  }

  private getAccountType(scope: Construct): string {
    const type = (
      scope.node.tryGetContext('account-type') ||
      scope.node.tryGetContext('account') ||
      scope.node.tryGetContext('a')
    );
    this.assertIsAccountType(type);
    return camelCase(type);
  }

  private assertIsAccountType(value: any): asserts value is string {
    if (typeof value !== 'string') {
      throw new AssertionError({
        message: 'Account Type not string',
        actual: typeof value,
        expected: 'string',
      });
    }
  }

  private getAccountConfiguration(scope: Construct, type: string): Configuration {
    const accounts = scope.node.tryGetContext('accounts');
    const configuration = accounts[type];
    // TODO validate?
    return configuration;
  }

  private getAccountId(configuration: Configuration): string {
    const id = configuration.id;
    this.assertIsAccountId(id);
    return id;
  }

  private assertIsAccountId(value: any): asserts value is string {
    const accountIdLenght = 12;

    if (typeof value !== 'string') {
      throw new AssertionError({
        message: 'Account ID not string',
        actual: typeof value,
        expected: 'string',
      });
    }
    if (value.length !== accountIdLenght) {
      throw new AssertionError({
        message: 'Invalid account ID lenght',
        actual: value.length,
        expected: accountIdLenght,
      });
    }
  }
}

