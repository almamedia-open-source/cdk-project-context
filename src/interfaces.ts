

export interface Account {
  readonly id: string;
  readonly config?: Record<string, any>;
}

export interface Author {
  readonly organization?: string;
  readonly name: string;
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
