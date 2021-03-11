import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  jsonUrl: string = "http://localhost:3000/heroes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero> {
    return this.http.get<Hero>(this.jsonUrl);
  }
}
