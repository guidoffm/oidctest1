import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ConfigService } from './config.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NgbNavModule,NavLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public route: ActivatedRoute) { }
  ngOnDestroy(): void {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
  }

  private logoutSubscription?: Subscription;
  readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly configService = inject(ConfigService);
  readonly router = inject(Router);
  links = [
    { title: 'Home', fragment: '/' },
    { title: 'Foo', fragment: '/p/foo' },
    { title: 'Bar', fragment: '/p/bar' },
    { title: 'Info', fragment: '/p/info' },
    { title: 'Users', fragment: '/p/users' }
  ];

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
