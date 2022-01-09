# AWS CDK Project Context

![CDK Version](https://img.shields.io/badge/CDK-v2-informational "CDK v2")
![Stability](https://img.shields.io/badge/Stability-Experimental-yellow "Stability: Experimental")
[![release](https://github.com/almamedia-open-source/cdk-project-context/actions/workflows/release.yml/badge.svg)](https://github.com/almamedia-open-source/cdk-project-context/actions/workflows/release.yml)

Opinionated CDK utility **construct for managing project information & AWS account-specific configuration**.

Why you'd use this?
1. If you use multi-account deployments, i.e. separate `dev` and `prod` workloads to different accounts.
2. Especially if you develop microservices, you end up with a lot of CDK projects. Without well-defined method of managing project configuration one often ends up reinventing the wheel in each project.
3. A developer can be quaranteed the configuration information is available and in correct format – or otherwise `cdk synth|diff|deploy` will fail.

Note: This is not a replacement for tools such as AWS AppConfig, Parameter Store or Secrets Manager! Project Context should only contain non-secret values that define "where to deploy" and certain values that you may wish to use for example as part of tagging or naming resources.

<br/>

## Important

**🚧 This tool is work-in-progress and experimental!**

All `@almamedia-open-source/cdk-` prefixed constructs/utilities are based on existing CDK constructs/utilities we've developed & used (in production) internally at [Alma Media](https://www.almamedia.fi/en/) since 2019.

_Breaking changes may occur at any given time without prior warning before first `v1` major is released_, as we rewrite them for CDK v2 and use this opportunity to also redesign & refactor.

[Feedback](https://github.com/almamedia-open-source/cdk-project-context/issues) is most welcome, but do note that we intend to implement these new constructs/utilities and their APIs in such manner that our existing CDK v1 production workloads can easily migrate into these new `@almamedia-open-source/cdk-` constructs/utilities.

<br/>

## Installation

1. Ensure you meet following requirements:
    - [NodeJS](https://nodejs.org/en/) `v14.17.6` or newer
    - [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) `v2.0.0` or newer

2. Install:
    ```shell
    npm i -D @almamedia-open-source/cdk-project-context
    ```

<br/>

## Usage

1. In your CDK application (for example `lib/app.ts`) use `Project` instead of `App` to initialize the CDK app:
    ```ts
    import { Project } from '@almamedia-open-source/cdk-project-context';

    // new Project instead of new App
    const project = new Project({
      name: 'my-cool-project',
      author: {
        organization: 'Acme Corp',
        name: 'Mad Scientists',
        email: 'mad.scientists@acme.example.com',
      },
      defaultRegion: 'eu-west-1', // defaults to one of: $CDK_DEFAULT_REGION, $AWS_REGION or us-east-1
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
    })
    ```

2. Somewhere in your stacks you may use static methods of `ProjectContext` class:
    ```ts
    import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
    import { ProjectContext } from '@almamedia-open-source/cdk-project-context';

    export class MyStack extends Stack {
      constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // Get the default region for this project
        new CfnOutput(this, 'DefaultRegion', { value: ProjectContext.getDefaultRegion(this) });

        // Get the project name
        new CfnOutput(this, 'Name', { value: ProjectContext.getName(this) });

        // Get information about the project author
        new CfnOutput(this, 'AuthorOrganization', { value: ProjectContext.getAuthorOrganization(this) });
        new CfnOutput(this, 'AuthorName', { value: ProjectContext.getAuthorName(this) });
        new CfnOutput(this, 'AuthorEmail', { value: ProjectContext.getAuthorEmail(this) });

        // Get AWS account specific configuration
        new CfnOutput(this, 'AccountType', { value: ProjectContext.getAccountType(this) });
        new CfnOutput(this, 'AccountId', { value: ProjectContext.getAccountId(this) });
        new CfnOutput(this, 'AccountBaseDomain', { value: ProjectContext.getAccountConfig(this, 'baseDomain') });

      }
    }
    ```

    There's also a shorthand alias `PC` available, for example: `PC.getAccountId(this)`.


3. Run CDK commands with `account-type` (or shorthand: `account`) CLI context flag to **_select_ the desired account configuration**:
    ```shell
    npx cdk deploy --context account=dev
    ```

4. You'll get the following CloudFormation outputs:
    |        Name        |           Example Value           |
    | :----------------- | :-------------------------------- |
    | DefaultRegion      | `eu-west-1`                       |
    | Name               | `my-cool-project`                 |
    | AuthorOrganization | `Acme Corp`                       |
    | AuthorName         | `Mad Scientists`                  |
    | AuthorEmail        | `mad.scientists@acme.example.com` |
    | AccountType        | `dev`                             |
    | AccountId          | `111111111111`                    |
    | AccountBaseDomain  | `example.net`                     |

<br/>

### Application Environment Retrieval

Often you may want to deploy multiple different application environments – “isolated copies” of your CDK application such as feature environments – into same AWS account. To manage that, you need some kind of "modifier" which selects the target application environment.

You may use this utility to retrieve application _environment_ information. In the context of this utility, _environment_ is just a string value such as `staging` or `production` – not to be confused with [CDK environments](https://docs.aws.amazon.com/cdk/v2/guide/environments.html) (which instead define the target AWS Account & Region configuration for a stack).

1. Somewhere in your stacks you may use static method `ProjectContext.getEnvironment(scope)`:
    ```ts
    import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
    import { PC } from '@almamedia-open-source/cdk-project-context'; // Using the PC shorthand here

    export class MyStack extends Stack {
      constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // Get the default region for this project
        new CfnOutput(this, 'Environment', { value: PC.getEnvironment(this) });
      }
    }
    ```

2. Specify `environment-type` (or shorthand: `environment` or `env`) CLI context flag to **_select_ the desired environment**:
    ```shell
    npx cdk deploy --context account=dev --context environment=staging
    ```


3. You'll get the following CloudFormation outputs:
    |    Name     | Example Value |
    | :---------- | :------------ |
    | Environment | `staging`     |
