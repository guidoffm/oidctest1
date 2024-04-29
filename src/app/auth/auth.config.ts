import { LogLevel, PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: [{
    authority: (window as any)['env']['oidcAuthority'],
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: (window as any)['env']['oidcClientId'],
    scope: (window as any)['env']['oidcScope'], // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
    logLevel: LogLevel.Debug,
    configId: '0-spa',
    secureRoutes: ['/api']
  }]
}
