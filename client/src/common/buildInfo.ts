export const getBuildCommit = (): string => process.env.BUILD_COMMIT ?? '';
export const getBuildEnv = (): string => process.env.BUILD_ENV ?? process.env.ENV ?? '';
export const getBuildTimestamp = (): string => process.env.BUILD_TIMESTAMP ?? '';
export const getBuildInfo = (): string =>
  `${getBuildEnv()}.${getBuildTimestamp()}.${getBuildCommit()}`;
