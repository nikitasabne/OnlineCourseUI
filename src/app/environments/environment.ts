import { EnvironmentConfiguration } from '../Model/environment-configuration';

const serverUrl = 'http://localhost:5103/api';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile: 'user-profiles',
  },
  adb2cConfig: {
    chatHubUrl: 'http://localhost:5103/chathub', // Correct URL
    clientId: '5212f2c7-60a9-46ad-bcbb-3f5dc9af3dab',
    readScopeUrl:
      'http://smartlearnbyNikita.onmicrosoft.com/smartlearnbyNikita/dev/api/User.Read',
    writeScopeUrl:
      'http://smartlearnbyNikita.onmicrosoft.com/smartlearnbyNikita/dev/api/User.Write',
    scopeUrls: [
      'http://smartlearnbyNikita.onmicrosoft.com/smartlearnbyNikita/dev/api/User.Read',
      'http://smartlearnbyNikita.onmicrosoft.com/smartlearnbyNikita/dev/api/User.Write',
    ],
  },
  cacheTimeInMinutes: 0,
};
