import { HttpClient } from '@angular/common/http';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [

  ],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent {
  constructor(private httpClient: HttpClient) { }
  output = 'Hello, World!';

  callApiTest() {
    this.httpClient.get('/api/test', { responseType: 'text' }).subscribe(x => this.output = x);
  }
  callApiTestName() {
    this.httpClient.get('/api/test/location', { responseType: 'text' }).subscribe(alert);
  }
}
