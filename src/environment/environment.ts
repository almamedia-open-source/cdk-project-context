import { AssertionError } from 'assert';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';

export interface IEnvironment {
  readonly name: string;
  readonly urlName: string;
}

export class EnvironmentContext implements IEnvironment {
  readonly name: string;
  readonly urlName: string;

  constructor(scope: Construct) {
    this.name = this.getEnvironment(scope);
    this.urlName = paramCase(this.name);
  }

  private getEnvironment(scope: Construct): string {
    const environment = (
      scope.node.tryGetContext('environment-name') ||
      scope.node.tryGetContext('environment') ||
      scope.node.tryGetContext('env') ||
      scope.node.tryGetContext('e')
    );

    this.assertIsEnvironment(environment);

    return environment;
  }

  private assertIsEnvironment(value: any): asserts value is string {
    if (typeof value !== 'string') {
      throw new AssertionError({
        message: 'Environment name not string',
        actual: typeof value,
        expected: 'string',
      });
    }
  }
}
