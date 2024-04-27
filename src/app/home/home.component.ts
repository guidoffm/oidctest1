import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  logoutSubscription: Subscription | undefined;
  /**
   *
   */
  constructor(public oidcSecurityService: OidcSecurityService, private router: Router) {
    // super();

  }
  ngOnDestroy(): void {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }
  async logout() {
    console.log('logout');
    await this.router.navigate(['/'])
    // this.logoutSubscription = this.oidcSecurityService.logoff(undefined, {
    //   // customParams: {
    //   //   // id_token_hint: this.oidcSecurityService.getIdToken(),
    //   //   LogoutPath: '/',
    //   //   PostLogoutRedirectUri: '/'
    //   // },
    //   logoffMethod: 'POST'
    // }).subscribe((result) => console.log('Logoff result:', result));
    this.logoutSubscription = this.oidcSecurityService.logoff().subscribe((result) => console.log('Logoff result:', result));
  }

  get isAuthenticated() {
    return this.oidcSecurityService.isAuthenticated();
  }
}
