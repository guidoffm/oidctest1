import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ReplaySubject, Subject, firstValueFrom, map, take } from 'rxjs';
import { NgbSortableHeader, SortEvent } from '../ngb-sortable-header.directive';

export type FlattenedUser = {
  key: string;
  city: string;
  state: string;
  personId: string;
  personOrg: string;
};

export type User = {
  key: string;
  data: {
    city: string;
    state: string;
    person: {
      id: string;
      org: string;
    }
  }
};

type UserResponse = {
  results: User[];
};
const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    NgbSortableHeader
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  @ViewChildren(NgbSortableHeader)
  headers!: QueryList<NgbSortableHeader>;

  ngOnInit() {
    this.callApiUsers();
  }
  users = new ReplaySubject<FlattenedUser[]>();
  sortedUsers = new Subject<FlattenedUser[]>();

  callApiUsers() {
    this.httpClient.get<UserResponse>('/api/users').
      subscribe(x => {
        const flattenedUsers = x.results.map(user => ({
          key: user.key,
          city: user.data.city,
          state: user.data.state,
          personId: user.data.person.id,
          personOrg: user.data.person.org
        }));
        this.users.next(flattenedUsers);
        this.sortedUsers.next(flattenedUsers);
      });
  }

  async onSort({ column, direction }: SortEvent) {
    // alert(`Sorting ${column} ${direction}`);

    // resetting other headers
    for (const header of this.headers) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }

    const users = await firstValueFrom(this.users);

    // sorting countries
    if (direction === '' || column === '') {
      this.sortedUsers.next(users);
    } else {
      this.sortedUsers.next([...users].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      }));
    }
  }
}
