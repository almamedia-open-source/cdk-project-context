import { App, AppProps } from 'aws-cdk-lib';
import { ProjectConfiguration } from './interfaces';
import { resolveDefaultRegion } from './resolve-region';


export interface ProjectProps extends ProjectConfiguration, AppProps {}

export class Project extends App {

  static CONTEXT_SCOPE = '@almamedia-open-source/cdk-project-context@v1';

  constructor(props: ProjectProps) {

    const projectContext: ProjectConfiguration = {
      name: props.name,
      author: props.author,
      accounts: props.accounts,
      defaultRegion: resolveDefaultRegion(props.defaultRegion),
    };

    super({
      ...props,
      context: {
        ...props.context,
        [Project.CONTEXT_SCOPE]: projectContext,
      },
    });
  }

}

