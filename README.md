# AWS CDK Project Context

![CDK Version](https://img.shields.io/badge/CDK-v2-informational "CDK v2")

Resolve AWS project configuration from CDK (`cdk.json` & runtime) context.

This is an opinionated utility tool that enforces a specific configuration model for AWS CDK projects. When used, a developer can be quaranteed the information is available and in correct format – or otherwise `cdk synth|diff|deploy` will fail.

Why you'd use this? Especially if you develop microservices, you end up with a lot of CDK projects. Without well-defined method of managing project configuration one often ends up reinventing the wheel in each project.

Note: This is not a replacement for tools such as AWS AppConfig, Parameter Store or Secrets Manager! Project Context should only contain non-secret values that define "where to deploy" and certain values that you may wish to use for example as part of tagging or naming resources.

## Installation

```shell
npm i -D @almamedia-open-source/cdk-project-context
```

## Usage

```ts
// new Project instead of new App
const project = new Project({
  name: 'foo',
  author: {
    organization: 'Acme Corp',
    name: 'Mad Scientists',
    email: 'mad.scientists@acme.example.com',
  },
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


3. Run CDK commands with `account` and optionally with `environment` CLI context flags:
    ```shell
    npx cdk diff --context account=dev --context environment=staging
    ```

    ... or use a shorthand syntax:
    ```shell
    npx cdk diff -c account=dev -c env=staging
    ```
