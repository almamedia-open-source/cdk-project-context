import { resolveDefaultRegion } from '../src/resolve-region';
import { resetRegionEnvironmentalVariables } from './reset-region';

describe('Default region selection', () => {

  beforeEach(resetRegionEnvironmentalVariables);
  afterEach(resetRegionEnvironmentalVariables);

  test('with explicit region', () => {
    process.env.CDK_DEFAULT_REGION = 'eu-north-1';
    process.env.AWS_REGION = 'eu-central-1';
    expect(resolveDefaultRegion('eu-west-1')).toBe('eu-west-1');
  });

  test('with region via CDK_DEFAULT_REGION', () => {
    process.env.CDK_DEFAULT_REGION = 'eu-north-1';
    expect(resolveDefaultRegion()).toBe('eu-north-1');
  });

  test('with region via AWS_REGION', () => {
    process.env.AWS_REGION = 'eu-central-1';
    expect(resolveDefaultRegion()).toBe('eu-central-1');
  });

  test('without region', () => {
    expect(resolveDefaultRegion()).toBe('us-east-1');
  });
});
