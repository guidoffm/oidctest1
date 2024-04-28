import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent {
  constructor(private httpClient: HttpClient) {}

  callApi() {
    this.httpClient.get<any>('/api/test').subscribe();
  }
}
