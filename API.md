# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### Project <a name="@almamedia-open-source/cdk-project-context.Project" id="almamediaopensourcecdkprojectcontextproject"></a>

High-level wrapper for `cdk.App` with specific requirements for props.

Use it like you would `cdk.App` and assign stacks into it.

#### Initializers <a name="@almamedia-open-source/cdk-project-context.Project.Initializer" id="almamediaopensourcecdkprojectcontextprojectinitializer"></a>

```typescript
import { Project } from '@almamedia-open-source/cdk-project-context'

new Project(props: ProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almamediaopensourcecdkprojectcontextprojectparameterprops)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-context.ProjectProps`](#@almamedia-open-source/cdk-project-context.ProjectProps) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.Project.parameter.props" id="almamediaopensourcecdkprojectcontextprojectparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-context.ProjectProps`](#@almamedia-open-source/cdk-project-context.ProjectProps)

---




#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`CONTEXT_SCOPE`](#almamediaopensourcecdkprojectcontextprojectpropertycontextscope)<span title="Required">*</span> | `string` | Namespace/key how this tool internally keeps track of the project configuration. |

---

##### `CONTEXT_SCOPE` <a name="@almamedia-open-source/cdk-project-context.Project.property.CONTEXT_SCOPE" id="almamediaopensourcecdkprojectcontextprojectpropertycontextscope"></a>

- *Type:* `string`

Namespace/key how this tool internally keeps track of the project configuration.

---

## Structs <a name="Structs" id="structs"></a>

### Account <a name="@almamedia-open-source/cdk-project-context.Account" id="almamediaopensourcecdkprojectcontextaccount"></a>

AWS account configuration.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Account } from '@almamedia-open-source/cdk-project-context'

const account: Account = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#almamediaopensourcecdkprojectcontextaccountpropertyid)<span title="Required">*</span> | `string` | AWS Account ID. |
| [`config`](#almamediaopensourcecdkprojectcontextaccountpropertyconfig) | {[ key: string ]: `any`} | AWS account specific configuration. |

---

##### `id`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.Account.property.id" id="almamediaopensourcecdkprojectcontextaccountpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

AWS Account ID.

---

##### `config`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.Account.property.config" id="almamediaopensourcecdkprojectcontextaccountpropertyconfig"></a>

```typescript
public readonly config: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

AWS account specific configuration.

For example VPC IDs (for existing VPCs), Direct Connect Gateway IDs, apex domain names (for Route53 Zone lookups), etc. Basically configuration for resources that are defined outside of this CDK application.

---

### Author <a name="@almamedia-open-source/cdk-project-context.Author" id="almamediaopensourcecdkprojectcontextauthor"></a>

Author information.

I.e. who owns/develops this project/service.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Author } from '@almamedia-open-source/cdk-project-context'

const author: Author = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#almamediaopensourcecdkprojectcontextauthorpropertyname)<span title="Required">*</span> | `string` | Human-readable name for the team/contact responsible for this project/service. |
| [`email`](#almamediaopensourcecdkprojectcontextauthorpropertyemail) | `string` | Email address for the team/contact responsible for this project/service. |
| [`organization`](#almamediaopensourcecdkprojectcontextauthorpropertyorganization) | `string` | Human-readable name for the organization responsible for this project/service. |

---

##### `name`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.Author.property.name" id="almamediaopensourcecdkprojectcontextauthorpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Human-readable name for the team/contact responsible for this project/service.

---

##### `email`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.Author.property.email" id="almamediaopensourcecdkprojectcontextauthorpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Email address for the team/contact responsible for this project/service.

---

##### `organization`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.Author.property.organization" id="almamediaopensourcecdkprojectcontextauthorpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Human-readable name for the organization responsible for this project/service.

---

### ProjectConfiguration <a name="@almamedia-open-source/cdk-project-context.ProjectConfiguration" id="almamediaopensourcecdkprojectcontextprojectconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ProjectConfiguration } from '@almamedia-open-source/cdk-project-context'

const projectConfiguration: ProjectConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accounts`](#almamediaopensourcecdkprojectcontextprojectconfigurationpropertyaccounts)<span title="Required">*</span> | {[ key: string ]: [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)} | Dictionary of AWS account specific configuration. |
| [`author`](#almamediaopensourcecdkprojectcontextprojectconfigurationpropertyauthor)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-context.Author`](#@almamedia-open-source/cdk-project-context.Author) | Author information. |
| [`name`](#almamediaopensourcecdkprojectcontextprojectconfigurationpropertyname)<span title="Required">*</span> | `string` | Name of your project/service. |
| [`defaultRegion`](#almamediaopensourcecdkprojectcontextprojectconfigurationpropertydefaultregion) | `string` | Specify default region you wish to use. |

---

##### `accounts`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectConfiguration.property.accounts" id="almamediaopensourcecdkprojectcontextprojectconfigurationpropertyaccounts"></a>

```typescript
public readonly accounts: {[ key: string ]: Account};
```

- *Type:* {[ key: string ]: [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)}

Dictionary of AWS account specific configuration.

The key value can be anything (such as AWS Account alias), but it's recommended to keep it short such as `dev` or `prod`.

---

##### `author`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectConfiguration.property.author" id="almamediaopensourcecdkprojectcontextprojectconfigurationpropertyauthor"></a>

```typescript
public readonly author: Author;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Author`](#@almamedia-open-source/cdk-project-context.Author)

Author information.

I.e. who owns/develops this project/service.

---

##### `name`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectConfiguration.property.name" id="almamediaopensourcecdkprojectcontextprojectconfigurationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Name of your project/service.

Prefer `hyphen-case`.

---

##### `defaultRegion`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectConfiguration.property.defaultRegion" id="almamediaopensourcecdkprojectcontextprojectconfigurationpropertydefaultregion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* `string`

Specify default region you wish to use.

If left empty will default to one of the following in order: 1. `$CDK_DEFAULT_REGION` 2. `$AWS_REGION` 3. 'us-east-1'

---

### ProjectProps <a name="@almamedia-open-source/cdk-project-context.ProjectProps" id="almamediaopensourcecdkprojectcontextprojectprops"></a>

Props given to `Project`.

I.e. custom props for this construct and the usual props given to `cdk.App`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ProjectProps } from '@almamedia-open-source/cdk-project-context'

const projectProps: ProjectProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accounts`](#almamediaopensourcecdkprojectcontextprojectpropspropertyaccounts)<span title="Required">*</span> | {[ key: string ]: [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)} | Dictionary of AWS account specific configuration. |
| [`author`](#almamediaopensourcecdkprojectcontextprojectpropspropertyauthor)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-context.Author`](#@almamedia-open-source/cdk-project-context.Author) | Author information. |
| [`name`](#almamediaopensourcecdkprojectcontextprojectpropspropertyname)<span title="Required">*</span> | `string` | Name of your project/service. |
| [`defaultRegion`](#almamediaopensourcecdkprojectcontextprojectpropspropertydefaultregion) | `string` | Specify default region you wish to use. |
| [`analyticsReporting`](#almamediaopensourcecdkprojectcontextprojectpropspropertyanalyticsreporting) | `boolean` | Include runtime versioning information in the Stacks of this app. |
| [`autoSynth`](#almamediaopensourcecdkprojectcontextprojectpropspropertyautosynth) | `boolean` | Automatically call `synth()` before the program exits. |
| [`context`](#almamediaopensourcecdkprojectcontextprojectpropspropertycontext) | {[ key: string ]: `any`} | Additional context values for the application. |
| [`outdir`](#almamediaopensourcecdkprojectcontextprojectpropspropertyoutdir) | `string` | The output directory into which to emit synthesized artifacts. |
| [`stackTraces`](#almamediaopensourcecdkprojectcontextprojectpropspropertystacktraces) | `boolean` | Include construct creation stack trace in the `aws:cdk:trace` metadata key of all constructs. |
| [`treeMetadata`](#almamediaopensourcecdkprojectcontextprojectpropspropertytreemetadata) | `boolean` | Include construct tree metadata as part of the Cloud Assembly. |

---

##### `accounts`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.accounts" id="almamediaopensourcecdkprojectcontextprojectpropspropertyaccounts"></a>

```typescript
public readonly accounts: {[ key: string ]: Account};
```

- *Type:* {[ key: string ]: [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)}

Dictionary of AWS account specific configuration.

The key value can be anything (such as AWS Account alias), but it's recommended to keep it short such as `dev` or `prod`.

---

##### `author`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.author" id="almamediaopensourcecdkprojectcontextprojectpropspropertyauthor"></a>

```typescript
public readonly author: Author;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Author`](#@almamedia-open-source/cdk-project-context.Author)

Author information.

I.e. who owns/develops this project/service.

---

##### `name`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.name" id="almamediaopensourcecdkprojectcontextprojectpropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Name of your project/service.

Prefer `hyphen-case`.

---

##### `defaultRegion`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.defaultRegion" id="almamediaopensourcecdkprojectcontextprojectpropspropertydefaultregion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* `string`

Specify default region you wish to use.

If left empty will default to one of the following in order: 1. `$CDK_DEFAULT_REGION` 2. `$AWS_REGION` 3. 'us-east-1'

---

##### `analyticsReporting`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.analyticsReporting" id="almamediaopensourcecdkprojectcontextprojectpropspropertyanalyticsreporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* `boolean`
- *Default:* Value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in the Stacks of this app.

---

##### `autoSynth`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.autoSynth" id="almamediaopensourcecdkprojectcontextprojectpropspropertyautosynth"></a>

```typescript
public readonly autoSynth: boolean;
```

- *Type:* `boolean`
- *Default:* true if running via CDK CLI (`CDK_OUTDIR` is set), `false` otherwise

Automatically call `synth()` before the program exits.

If you set this, you don't have to call `synth()` explicitly. Note that this feature is only available for certain programming languages, and calling `synth()` is still recommended.

---

##### `context`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.context" id="almamediaopensourcecdkprojectcontextprojectpropspropertycontext"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}
- *Default:* no additional context

Additional context values for the application.

Context set by the CLI or the `context` key in `cdk.json` has precedence.  Context can be read from any construct using `node.getContext(key)`.

---

##### `outdir`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.outdir" id="almamediaopensourcecdkprojectcontextprojectpropspropertyoutdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* If this value is _not_ set, considers the environment variable `CDK_OUTDIR`.   If `CDK_OUTDIR` is not defined, uses a temp directory.

The output directory into which to emit synthesized artifacts.

You should never need to set this value. By default, the value you pass to the CLI's `--output` flag will be used, and if you change it to a different directory the CLI will fail to pick up the generated Cloud Assembly.  This property is intended for internal and testing use.

---

##### `stackTraces`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.stackTraces" id="almamediaopensourcecdkprojectcontextprojectpropspropertystacktraces"></a>

```typescript
public readonly stackTraces: boolean;
```

- *Type:* `boolean`
- *Default:* true stack traces are included unless `aws:cdk:disable-stack-trace` is set in the context.

Include construct creation stack trace in the `aws:cdk:trace` metadata key of all constructs.

---

##### `treeMetadata`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectProps.property.treeMetadata" id="almamediaopensourcecdkprojectcontextprojectpropspropertytreemetadata"></a>

```typescript
public readonly treeMetadata: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include construct tree metadata as part of the Cloud Assembly.

---

## Classes <a name="Classes" id="classes"></a>

### ProjectContext <a name="@almamedia-open-source/cdk-project-context.ProjectContext" id="almamediaopensourcecdkprojectcontextprojectcontext"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-context.ProjectContext.Initializer" id="almamediaopensourcecdkprojectcontextprojectcontextinitializer"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

new ProjectContext()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`getAccountConfig`](#almamediaopensourcecdkprojectcontextprojectcontextgetaccountconfig) | *No description.* |
| [`getAccountId`](#almamediaopensourcecdkprojectcontextprojectcontextgetaccountid) | *No description.* |
| [`getAccountType`](#almamediaopensourcecdkprojectcontextprojectcontextgetaccounttype) | *No description.* |
| [`getAuthorEmail`](#almamediaopensourcecdkprojectcontextprojectcontextgetauthoremail) | *No description.* |
| [`getAuthorName`](#almamediaopensourcecdkprojectcontextprojectcontextgetauthorname) | *No description.* |
| [`getAuthorOrganization`](#almamediaopensourcecdkprojectcontextprojectcontextgetauthororganization) | *No description.* |
| [`getDefaultRegion`](#almamediaopensourcecdkprojectcontextprojectcontextgetdefaultregion) | *No description.* |
| [`getEnvironment`](#almamediaopensourcecdkprojectcontextprojectcontextgetenvironment) | *No description.* |
| [`getName`](#almamediaopensourcecdkprojectcontextprojectcontextgetname) | *No description.* |

---

##### `getAccountConfig` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getAccountConfig" id="almamediaopensourcecdkprojectcontextprojectcontextgetaccountconfig"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getAccountConfig(scope: Construct, key: string)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `key`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.key" id="almamediaopensourcecdkprojectcontextprojectcontextparameterkey"></a>

- *Type:* `string`

---

##### `getAccountId` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getAccountId" id="almamediaopensourcecdkprojectcontextprojectcontextgetaccountid"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getAccountId(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getAccountType` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getAccountType" id="almamediaopensourcecdkprojectcontextprojectcontextgetaccounttype"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getAccountType(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getAuthorEmail` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getAuthorEmail" id="almamediaopensourcecdkprojectcontextprojectcontextgetauthoremail"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getAuthorEmail(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getAuthorName` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getAuthorName" id="almamediaopensourcecdkprojectcontextprojectcontextgetauthorname"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getAuthorName(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getAuthorOrganization` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getAuthorOrganization" id="almamediaopensourcecdkprojectcontextprojectcontextgetauthororganization"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getAuthorOrganization(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getDefaultRegion` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getDefaultRegion" id="almamediaopensourcecdkprojectcontextprojectcontextgetdefaultregion"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getDefaultRegion(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getEnvironment` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getEnvironment" id="almamediaopensourcecdkprojectcontextprojectcontextgetenvironment"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getEnvironment(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getName` <a name="@almamedia-open-source/cdk-project-context.ProjectContext.getName" id="almamediaopensourcecdkprojectcontextprojectcontextgetname"></a>

```typescript
import { ProjectContext } from '@almamedia-open-source/cdk-project-context'

ProjectContext.getName(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-context.ProjectContext.parameter.scope" id="almamediaopensourcecdkprojectcontextprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---




