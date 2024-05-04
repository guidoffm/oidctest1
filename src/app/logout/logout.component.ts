import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) { }
  ngOnInit(): void {
    this.oidcSecurityService.logoff().subscribe(async (result) => {
      console.log('Logoff result:', result);
      await this.router.navigate(['/'])
    });

  }

}
