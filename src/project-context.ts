import { Annotations } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Account, ProjectConfiguration } from './interfaces';
import { Project } from './project';


export class ProjectContext {

  static getAccountType(scope: Construct): string {
    const type = (
      scope.node.tryGetContext('account-type') ||
      scope.node.tryGetContext('account')
    );

    if (typeof type !== 'string') {
      // TODO decide if add annotation or throw?
      Annotations.of(scope).addError('Account Type not specified! Provide account type as context argument for CDK CLI, for example: --context account=dev');
    }

    return type;
  }

  static getAccountId(scope: Construct): string {
    const account = ProjectContext.getProjectAccountContext(scope);
    return account.id;
  }

  static getAccountConfig(scope: Construct, key: string): any {
    const account = ProjectContext.getProjectAccountContext(scope);
    return account.config?.[key];
  }

  static getDefaultRegion(scope: Construct): string {
    const projectContext = ProjectContext.getProjectContext(scope);
    return projectContext.defaultRegion!;
  }

  static getName(scope: Construct): string {
    const projectContext = ProjectContext.getProjectContext(scope);
    return projectContext.name;
  }

  static getAuthorOrganization(scope: Construct): string | undefined {
    const projectContext = ProjectContext.getProjectContext(scope);
    return projectContext.author.organization;
  }

  static getAuthorName(scope: Construct): string {
    const projectContext = ProjectContext.getProjectContext(scope);
    return projectContext.author.name;
  }

  static getAuthorEmail(scope: Construct): string | undefined {
    const projectContext = ProjectContext.getProjectContext(scope);
    return projectContext.author.email;
  }

  static getEnvironment(scope: Construct): string | undefined {
    return (
      scope.node.tryGetContext('environment-type') ||
      scope.node.tryGetContext('environment') ||
      scope.node.tryGetContext('env')
    );
  }

  private static getProjectContext(scope: Construct): ProjectConfiguration {
    const projectContext = <ProjectConfiguration>scope.node.tryGetContext(Project.CONTEXT_SCOPE);
    return projectContext;
  }

  private static getProjectAccountContext(scope: Construct): Account {
    const accountType = ProjectContext.getAccountType(scope);
    const projectContext = ProjectContext.getProjectContext(scope);
    return projectContext.accounts[accountType];
  }


}
