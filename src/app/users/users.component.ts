import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.callApiUsers();
  }
  users = new Subject<any>();
  callApiUsers() {
    this.httpClient.get<any>('/api/users', { responseType: 'json' }).subscribe(x => this.users.next(x.results));
  }
}
