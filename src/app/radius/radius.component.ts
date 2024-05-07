import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { OperatorFunction, ReplaySubject, Subject, debounceTime, distinctUntilChanged, map, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-radius',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
  ],
  templateUrl: './radius.component.html',
  styleUrl: './radius.component.css'
})
export class RadiusComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get<{ ort: string; plz: string }[]>(`/api/zipcodes`).
      pipe(map(y => y.map(z => z.plz))).
      subscribe(x => this.zipcodes.next(x));
  }
  hits = new Subject<any[]>();
  zipcodes = new ReplaySubject<string[]>();

  zip = '';
  radius = 10;

  search() {
    this.httpClient.get<any[]>(`/api/radius/${this.zip}/${this.radius * 1000}`).subscribe(x => this.hits.next(x));
  }

  filterZipcodes: OperatorFunction<string, string[]> = pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => term.length < 2 ? [] : this.zipcodes.pipe(
      map(y => y.filter(z => z.startsWith(term))),
      map(y => y.sort())
    ))
  );
}

