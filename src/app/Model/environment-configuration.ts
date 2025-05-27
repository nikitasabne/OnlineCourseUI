export interface EnvironmentConfiguration {
  env_name: string;
  production: boolean;
  apiUrl: string;
  apiEndpoints: {
    userProfile: string;
  };
  adb2cConfig: {
    chatHubUrl: string;
    clientId: string;
    readScopeUrl: string;
    scopeUrls: string[];
    writeScopeUrl: string;
  };
  cacheTimeInMinutes: number;
}
