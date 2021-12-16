import { App, AppProps, Annotations } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export interface Account {
  readonly id: string;
  readonly config?: Record<string, any>;
}

export interface Author {
  readonly organization: string;
  readonly name?: string;
  readonly email?: string;
}

export interface ProjectConfiguration {
  readonly name: string;
  readonly author: Author;

  /**
   * Specify default region you wish to use.
   *
   * If left empty will default to one of the following in order:
   * 1. `$CDK_DEFAULT_REGION`
   * 2. `$AWS_REGION`
   * 3. 'us-east-1'
  */
  readonly defaultRegion?: string;
  readonly accounts: Record<string, Account>;
}

const regionRegexp = /^[a-z-]{2,}-[a-z-]{2,}-\d$/;

export function ensureRegionString(value: string | undefined): boolean {
  if (typeof value !== 'string') return false;
  return regionRegexp.test(value);
}

export function resolveDefaultRegion(props: ProjectProps): string {
  if (ensureRegionString(props.defaultRegion)) {
    return <string>props.defaultRegion;
  }

  if (ensureRegionString(process.env.CDK_DEFAULT_REGION)) {
    return <string>process.env.CDK_DEFAULT_REGION;
  }

  if (ensureRegionString(process.env.AWS_REGION)) {
    return <string>process.env.AWS_REGION;
  }

  return 'us-east-1';
}

export interface ProjectProps extends ProjectConfiguration, AppProps {}

export class Project extends App {

  static CONTEXT_SCOPE = '@almamedia-open-source/cdk-project-context@v1';

  constructor(props: ProjectProps) {

    const projectContext: ProjectConfiguration = {
      name: props.name,
      author: props.author,
      accounts: props.accounts,
      defaultRegion: resolveDefaultRegion(props),
    };

    super({
      ...props,
      context: {
        [Project.CONTEXT_SCOPE]: projectContext,
      },
    });

    //this.node.setContext(CONTEXT_SCOPE, projectContext);
  }

}


export class ProjectContext {

  static getAccountType(scope: Construct): string {
    const type = (
      scope.node.tryGetContext('account-type') ||
      scope.node.tryGetContext('account') ||
      scope.node.tryGetContext('a')
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
