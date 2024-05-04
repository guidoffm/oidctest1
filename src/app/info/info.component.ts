import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  constructor(public oidcSecurityService: OidcSecurityService) { }
  get isAuthenticated() {
    return this.oidcSecurityService.isAuthenticated();
  }
}
