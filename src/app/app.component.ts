import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training app';
  myHero: Hero = {
    name: "Magneto",
    address: "New York",
    superpower: "megnetic"
  };

  listObservable: Observable<any>;

  constructor() {
    this.listObservable = new Observable( observer => {
      
    })
  }
}
