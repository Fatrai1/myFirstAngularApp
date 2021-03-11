import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';

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

  constructor(
    private fService: FootballService
  ) {
    this.listObservable = new Observable( observer => {
      let to = setTimeout( () => {
        observer.next("Megjöttem...");
      }, 15000);
      let to2 = setTimeout( () => {
        observer.complete();
      }, 20000);
    });
    this.listObservable.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log("complete")
    );
  }
}
