import { Annotations } from "aws-cdk-lib";
import { Construct } from "constructs";
import { findKey } from "lodash";
import { EnvRegExp } from "./envregexp";
import { Account, ProjectConfiguration } from "./interfaces";
import { Project } from "./project";

export class ProjectContext {
  /**
   * Returns the account type given in runtime/CLI context
   */
  static getAccountType(scope: Construct): string {
    const type =
      scope.node.tryGetContext("account-type") ||
      scope.node.tryGetContext("account");

    if (typeof type !== "string") {
      Annotations.of(scope).addError(
        "Account Type not specified! Provide account type as context argument for CDK CLI, for example: --context account-type=dev"
      );
    }

    return type;
  }

  static getAccountId(scope: Construct): string {
    const account = ProjectContext.getProjectAccountConfiguration(scope);
    return account.id;
  }

  static getAccountConfig(scope: Construct, key: string): any {
    const account = ProjectContext.getProjectAccountConfiguration(scope);
    return account.config?.[key];
  }

  static getDefaultRegion(scope: Construct): string {
    const projectContext = ProjectContext.getProjectConfiguration(scope);
    return projectContext.defaultRegion!;
  }

  static getName(scope: Construct): string {
    const projectContext = ProjectContext.getProjectConfiguration(scope);
    return projectContext.name;
  }

  static getAuthorOrganization(scope: Construct): string | undefined {
    const projectContext = ProjectContext.getProjectConfiguration(scope);
    return projectContext.author.organization;
  }

  static getAuthorName(scope: Construct): string {
    const projectContext = ProjectContext.getProjectConfiguration(scope);
    return projectContext.author.name;
  }

  static getAuthorEmail(scope: Construct): string | undefined {
    const projectContext = ProjectContext.getProjectConfiguration(scope);
    return projectContext.author.email;
  }

  static getAllowedEnvironments(scope: Construct): string[] {
    const account = ProjectContext.getProjectAccountConfiguration(scope);
    return account.environments || [];
  }

  static getEnvironment(scope: Construct): string {
    const environment = ProjectContext.tryGetEnvironment(scope);

    if (typeof environment !== "string") {
      Annotations.of(scope).addError(
        "Environment Type not specified! Provide environment type as context argument for CDK CLI, for example: --context environment-type=staging"
      );
    }

    const allowedEnvironments = ProjectContext.getAllowedEnvironments(scope);

    const matches = allowedEnvironments.filter((e) =>
      new EnvRegExp(e).test(environment || "")
    );

    if (matches.length < 1) {
      Annotations.of(scope).addError(
        "Environment Type not allowed in your configuration"
      );
    }

    return <string>environment;
  }

  /**
   * Low-level / internal method which in most cases you should not use or depend upon.
   *
   * @internal
   */
  static setAccountType(scope: Construct, accountType: string): void {
    scope.node.setContext("account-type", accountType);
    scope.node.setContext("account", accountType);
  }

  /**
   * Low-level / internal method which in most cases you should not use or depend upon.
   *
   * @internal
   */
  static setEnvironmentType(scope: Construct, environmentType: string): void {
    scope.node.setContext("environment-type", environmentType);
    scope.node.setContext("environment", environmentType);
    scope.node.setContext("env", environmentType);
  }

  /**
   * Low-level / internal method which in most cases you should not use or depend upon.
   *
   * @internal
   */
  static getAccountTypeByEnvironment(
    scope: Construct,
    environmentType: string
  ): string {
    const projectContext = ProjectContext.getProjectConfiguration(scope);

    const accountType = findKey(projectContext.accounts, (account) =>
      account.environments?.filter((environment) =>
        new EnvRegExp(environment).test(environmentType)
      )
    );

    if (typeof accountType !== "string") {
      Annotations.of(scope).addError(
        `Could not find matching account type for given environment ${environmentType}`
      );
      return "";
    }

    return accountType;
  }

  private static tryGetEnvironment(scope: Construct): string | undefined {
    const environment =
      scope.node.tryGetContext("environment-type") ||
      scope.node.tryGetContext("environment") ||
      scope.node.tryGetContext("env");

    return environment;
  }

  /**
   * Returns the project configuration
   */
  private static getProjectConfiguration(
    scope: Construct
  ): ProjectConfiguration {
    const projectContext = <ProjectConfiguration | undefined>(
      scope.node.tryGetContext(Project.CONTEXT_SCOPE)
    );
    if (typeof projectContext === "undefined") {
      Annotations.of(scope).addError(
        "Project configuration missing. Did you forgot to instantiate new Project (instead of new App)?"
      );
    }
    return <ProjectConfiguration>projectContext;
  }

  /**
   * Returns the account specific project configuration
   */
  private static getProjectAccountConfiguration(scope: Construct): Account {
    const accountType = ProjectContext.getAccountType(scope);
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return projectConfiguration.accounts[accountType];
  }
}
