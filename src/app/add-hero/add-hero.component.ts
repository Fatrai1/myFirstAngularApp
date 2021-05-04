import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { superPowers } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  powers: string[] = superPowers.list;

  newHeroGroup: FormGroup = new FormGroup({
    neme: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address: new FormControl('', [Validators.required, Validators.minLength(8)]),
    superpower: new FormControl('')
  });

  constructor(private hService: HeroService) { 
    console.log(this.newHeroGroup);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.hService.add(this.newHeroGroup.value)

  }

}
