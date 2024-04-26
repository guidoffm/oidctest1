import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'https://idsvr4.azurewebsites.net',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: 'http://localhost:4200',
    clientId: 'spa',
    scope: 'openid profile offline_access', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
  }
}
