import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '626104102087-raim7uq02tefr5djn5sppq38ka3ksihr.apps.googleusercontent.com',
  scope: 'openid profile'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  userProfileSubject = new Subject<UserInfo>();

  constructor(private readonly oAuthService: OAuthService) {
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.logoutUrl = 'https://google.com/accounts/Logout'
    this.oAuthService.loadDiscoveryDocument();
    this.oAuthService.tryLoginImplicitFlow();
  }

  login() {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo);
            console.log(JSON.stringify(userProfile))
          })
        }
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  getToken(): string {
    return this.oAuthService.getIdToken();
  }
  signOut() {
    this.oAuthService.logOut();
  }
}
