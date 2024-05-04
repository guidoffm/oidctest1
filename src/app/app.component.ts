import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ConfigService } from './config.service';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NgbNavModule, NavLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }


  readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly configService = inject(ConfigService);
  readonly router = inject(Router);
  links = [
    { title: 'Home', fragment: '/' },
    { title: 'Foo', fragment: '/p/foo' },
    { title: 'Bar', fragment: '/p/bar' },
    { title: 'Info', fragment: '/p/info' },
    { title: 'Users', fragment: '/p/users' },
    { title: 'Logout', fragment: '/logout' }
  ];

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        this.configService.accessToken = accessToken;
      });
  }

  title = 'oidctest1';

}
