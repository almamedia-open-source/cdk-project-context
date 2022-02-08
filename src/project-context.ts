import { Construct } from "constructs";
import { Account, ProjectConfiguration } from "./interfaces";
import { Project } from "./project";
import { AccountType } from './account-type';
import { EnvironmentType } from "./environment-type";
import { addError } from './error';

export class ProjectContext {
  /**
   * Returns the account type given in runtime/CLI context
   */
  static getAccountType(scope: Construct): string {
    return AccountType.get(scope);
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
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return projectConfiguration.defaultRegion!;
  }

  static getName(scope: Construct): string {
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return projectConfiguration.name;
  }

  static getAuthorOrganization(scope: Construct): string | undefined {
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return projectConfiguration.author.organization;
  }

  static getAuthorName(scope: Construct): string {
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return projectConfiguration.author.name;
  }

  static getAuthorEmail(scope: Construct): string | undefined {
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return projectConfiguration.author.email;
  }

  static getAllowedEnvironments(scope: Construct): string[] {
    const account = ProjectContext.getProjectAccountConfiguration(scope);
    return account.environments || [];
  }

  static getEnvironment(scope: Construct): string {
    const allowedEnvironments = ProjectContext.getAllowedEnvironments(scope);
    return EnvironmentType.get(scope, allowedEnvironments);
  }

  /**
   * Low-level / internal method which in most cases you should not use or depend upon.
   *
   * @internal
   */
  static setAccountType(scope: Construct, accountType: string): void {
    AccountType.set(scope, accountType);
  }

  /**
   * Low-level / internal method which in most cases you should not use or depend upon.
   *
   * @internal
   */
  static setEnvironmentType(scope: Construct, environmentType: string): void {
    EnvironmentType.set(scope, environmentType);
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
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);
    return AccountType.matchFromEnvironment(scope, projectConfiguration.accounts, environmentType);
  }


  /**
   * Returns the project configuration
   */
  private static getProjectConfiguration(
    scope: Construct
  ): ProjectConfiguration {
    const projectConfiguration = <ProjectConfiguration | undefined>(
      scope.node.tryGetContext(Project.CONTEXT_SCOPE)
    );
    if (typeof projectConfiguration === "undefined") {
      addError(scope,
        "Project configuration missing. Did you forgot to instantiate new Project (instead of new App)?"
      );
    }
    return <ProjectConfiguration>projectConfiguration;
  }

  /**
   * Returns the account specific project configuration
   */
  private static getProjectAccountConfiguration(scope: Construct): Account {
    const accountType = ProjectContext.getAccountType(scope);
    const projectConfiguration = ProjectContext.getProjectConfiguration(scope);

    if (!(accountType in projectConfiguration.accounts)) {
      addError(scope,
        `Account Type ${accountType} not defined in Project Configuration Accounts`
      );
    }

    return projectConfiguration.accounts[accountType];
  }
}
