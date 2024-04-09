import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly oidcSecurityService = inject(OidcSecurityService);


  ngOnInit(): void {
    // this.oidcSecurityService
    //   .checkAuth()
    //   .subscribe(({ isAuthenticated, userData, accessToken }) => {
    //     // ...
    //   });
  }
  title = 'oidctest1';

}
