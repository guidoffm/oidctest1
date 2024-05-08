import { LogLevel, PassedInitialConfig } from 'angular-auth-oidc-client';

const env = (window as any)['env'];
export const authConfig: PassedInitialConfig = {
  config: [{
    authority: env['oidcAuthority'],
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: env['oidcClientId'],
    scope: env['oidcScope'], // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
    logLevel: LogLevel.Debug,
    configId: '0-spa',
    secureRoutes: ['/api']
  }]
}
