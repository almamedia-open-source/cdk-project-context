# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="classes"></a>

### EnvironmentContext <a name="v2test.EnvironmentContext" id="v2testenvironmentcontext"></a>

- *Implements:* [`v2test.IEnvironment`](#v2test.IEnvironment)

#### Initializers <a name="v2test.EnvironmentContext.Initializer" id="v2testenvironmentcontextinitializer"></a>

```typescript
import { EnvironmentContext } from 'v2test'

new EnvironmentContext(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#v2testenvironmentcontextparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="v2test.EnvironmentContext.parameter.scope" id="v2testenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#v2testenvironmentcontextpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`urlName`](#v2testenvironmentcontextpropertyurlname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `name`<sup>Required</sup> <a name="v2test.EnvironmentContext.property.name" id="v2testenvironmentcontextpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `urlName`<sup>Required</sup> <a name="v2test.EnvironmentContext.property.urlName" id="v2testenvironmentcontextpropertyurlname"></a>

```typescript
public readonly urlName: string;
```

- *Type:* `string`

---


### ProjectContext <a name="v2test.ProjectContext" id="v2testprojectcontext"></a>

- *Implements:* [`v2test.IProject`](#v2test.IProject)

#### Initializers <a name="v2test.ProjectContext.Initializer" id="v2testprojectcontextinitializer"></a>

```typescript
import { ProjectContext } from 'v2test'

new ProjectContext(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#v2testprojectcontextparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="v2test.ProjectContext.parameter.scope" id="v2testprojectcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`author`](#v2testprojectcontextpropertyauthor)<span title="Required">*</span> | [`v2test.IAuthor`](#v2test.IAuthor) | *No description.* |
| [`name`](#v2testprojectcontextpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`defaultRegion`](#v2testprojectcontextpropertydefaultregion) | `string` | *No description.* |

---

##### `author`<sup>Required</sup> <a name="v2test.ProjectContext.property.author" id="v2testprojectcontextpropertyauthor"></a>

```typescript
public readonly author: IAuthor;
```

- *Type:* [`v2test.IAuthor`](#v2test.IAuthor)

---

##### `name`<sup>Required</sup> <a name="v2test.ProjectContext.property.name" id="v2testprojectcontextpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `defaultRegion`<sup>Optional</sup> <a name="v2test.ProjectContext.property.defaultRegion" id="v2testprojectcontextpropertydefaultregion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* `string`

---


## Protocols <a name="Protocols" id="protocols"></a>

### IAuthor <a name="v2test.IAuthor" id="v2testiauthor"></a>

- *Implemented By:* [`v2test.IAuthor`](#v2test.IAuthor)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`email`](#v2testiauthorpropertyemail)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#v2testiauthorpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#v2testiauthorpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `email`<sup>Required</sup> <a name="v2test.IAuthor.property.email" id="v2testiauthorpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="v2test.IAuthor.property.name" id="v2testiauthorpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="v2test.IAuthor.property.organization" id="v2testiauthorpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

### IEnvironment <a name="v2test.IEnvironment" id="v2testienvironment"></a>

- *Implemented By:* [`v2test.EnvironmentContext`](#v2test.EnvironmentContext), [`v2test.IEnvironment`](#v2test.IEnvironment)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`name`](#v2testienvironmentpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`urlName`](#v2testienvironmentpropertyurlname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `name`<sup>Required</sup> <a name="v2test.IEnvironment.property.name" id="v2testienvironmentpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `urlName`<sup>Required</sup> <a name="v2test.IEnvironment.property.urlName" id="v2testienvironmentpropertyurlname"></a>

```typescript
public readonly urlName: string;
```

- *Type:* `string`

---

### IProject <a name="v2test.IProject" id="v2testiproject"></a>

- *Implemented By:* [`v2test.ProjectContext`](#v2test.ProjectContext), [`v2test.IProject`](#v2test.IProject)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`author`](#v2testiprojectpropertyauthor)<span title="Required">*</span> | [`v2test.IAuthor`](#v2test.IAuthor) | *No description.* |
| [`name`](#v2testiprojectpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`defaultRegion`](#v2testiprojectpropertydefaultregion) | `string` | *No description.* |

---

##### `author`<sup>Required</sup> <a name="v2test.IProject.property.author" id="v2testiprojectpropertyauthor"></a>

```typescript
public readonly author: IAuthor;
```

- *Type:* [`v2test.IAuthor`](#v2test.IAuthor)

---

##### `name`<sup>Required</sup> <a name="v2test.IProject.property.name" id="v2testiprojectpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `defaultRegion`<sup>Optional</sup> <a name="v2test.IProject.property.defaultRegion" id="v2testiprojectpropertydefaultregion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* `string`

---

