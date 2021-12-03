import { capitalCase } from 'change-case';
import { Construct } from 'constructs';
import { validateMultiple } from 'tv4';
import projectSchema from './project.schema.json';

export interface IAuthor {
  readonly organization: string;
  readonly name: string;
  readonly email: string;
}

export interface IProject {
  readonly defaultRegion?: string;
  readonly name: string;
  readonly author: IAuthor;
}

export class ProjectContext implements IProject {
  readonly defaultRegion?: string;
  readonly name: string;
  readonly author: IAuthor;

  constructor(scope: Construct) {
    const project = scope.node.tryGetContext('project');

    this.assertIsProject(project);

    this.defaultRegion = this.getDefaultRegion(scope, project);
    this.name = capitalCase(project.name);
    this.author = project.author;
  }

  private assertIsProject(value: any): asserts value is IProject {
    const result = validateMultiple({ value }, projectSchema);
    if (!result.valid) {
      // TODO is there better way to manage these errors?
      throw new Error(`Invalid "project" in cdk.json: \n - ${result.errors.join('\n - ')}`);
    }
  }

  private getDefaultRegion(scope: Construct, project: IProject): string | undefined {
    if (typeof project.defaultRegion === 'string') {
      return project.defaultRegion;
    }
    return scope.node.tryGetContext('defaultRegion');
  }
}
