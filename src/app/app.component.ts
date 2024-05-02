import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ConfigService } from './config.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }

  private logoutSubscription?: Subscription;
  readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly configService = inject(ConfigService);
  private readonly router = inject(Router);

  get navLinkHomeClass() {
    if (this.router.url === '/') {
      return 'nav-link active';
    }
    return 'nav-link';
  }

  get navLinkBarClass() {
    if (this.router.url === '/p/bar') {
      return 'nav-link active';
    }
    return 'nav-link';
  }

  get navLinkFooClass() {
    if (this.router.url === '/p/foo') {
      return 'nav-link active';
    }
    return 'nav-link';
  }
  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        this.configService.accessToken = accessToken;
      });
  }

  title = 'oidctest1';

  async logout() {
    console.log('logout');
    await this.router.navigate(['/'])
    this.logoutSubscription = this.oidcSecurityService.logoff().subscribe((result) => console.log('Logoff result:', result));
  }

}
