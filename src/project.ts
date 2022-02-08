import { App, AppProps } from 'aws-cdk-lib';
import { ProjectConfiguration } from './interfaces';
import { resolveDefaultRegion } from './resolve-region';

/** Props given to `Project`.
 *
 * I.e. custom props for this construct and the usual props given to `cdk.App`.
 * */
export interface ProjectProps extends ProjectConfiguration, AppProps {}

/** High-level wrapper for `cdk.App` with specific requirements for props.
 *
 * Use it like you would `cdk.App` and assign stacks into it.
 *
 * @example
 * // new Project instead of new App
 * const project = new Project({
 *   name: 'my-cool-project',
 *   author: {
 *     organization: 'Acme Corp',
 *     name: 'Mad Scientists',
 *     email: 'mad.scientists@acme.example.com',
 *   },
 *   defaultRegion: 'eu-west-1', // defaults to one of: $CDK_DEFAULT_REGION, $AWS_REGION or us-east-1
 *   accounts: {
 *     dev: {
 *       id: '111111111111',
 *       config: {
 *         baseDomain: 'example.net',
 *       },
 *     },
 *     prod: {
 *       id: '222222222222',
 *       config: {
 *         baseDomain: 'example.com',
 *       },
 *     },
 *   },
 * })
 */
export class Project extends App {

  /** Namespace/key how this tool internally keeps track of the project configuration */
  public static readonly CONTEXT_SCOPE = '@almamedia-open-source/cdk-project-context@v1';

  /** Initializes a new Project (which can be used in place of cdk.App) */
  constructor(props: ProjectProps) {

    // Define the project configuration set into App context
    const config: ProjectConfiguration = {
      name: props.name,
      author: props.author,
      accounts: props.accounts,
      defaultRegion: resolveDefaultRegion(props.defaultRegion),
    };

    // TODO validate no duplicate environments in accounts

    super({ // initialize the cdk.App
      ...props, // and pass in the given props
      context: { // but overwrite context
        ...props.context, // while still passing the context given in props
        [Project.CONTEXT_SCOPE]: config, // and inject project context
      },
    });
  }

}

