import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  /**
   *
   */
  constructor(public oidcSecurityService: OidcSecurityService) {
    // super();

  }

  get isAuthenticated() {
    return this.oidcSecurityService.isAuthenticated();
  }
}
