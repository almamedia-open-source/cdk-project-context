export function resetRegionEnvironmentalVariables(): void {
  process.env.CDK_DEFAULT_REGION = undefined;
  process.env.AWS_REGION = undefined;
}
