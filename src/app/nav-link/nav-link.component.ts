import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {

  constructor(private router: Router) { }
  @Input() title = '';
  @Input() fragment = '';
  @Input() class  = '';
  get extClass() {
    return `${this.class} ${this.fragment === this.router.url? ' active' : ''}`;
  }

}
