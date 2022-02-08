import { Annotations } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EnvRegExp } from './envregexp';


export class EnvironmentType {

  static set(scope: Construct, environmentType: string): void {
    scope.node.setContext("environment-type", environmentType);
    scope.node.setContext("environment", environmentType);
    scope.node.setContext("env", environmentType);
  }

  static get(scope: Construct, allowedEnvironments: string[]): string {
    const environmentType =
      scope.node.tryGetContext("environment-type") ||
      scope.node.tryGetContext("environment") ||
      scope.node.tryGetContext("env");

    if (typeof environmentType !== "string") {
      Annotations.of(scope).addError(
        "Environment Type not specified! Provide environment type as context argument for CDK CLI, for example: --context environment-type=staging"
      );
    }

    const matches = allowedEnvironments.filter((e) =>
      new EnvRegExp(e).test(environmentType)
    );

    if (matches.length < 1) {
      Annotations.of(scope).addError(
        `Environment Type ${environmentType} not allowed in your configuration`
      );
    }

    return environmentType;
  }
}