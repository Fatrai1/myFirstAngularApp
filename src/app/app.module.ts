import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hero",
    component: HeroComponent
  },
  {
    path: "hero/add",
    component: AddHeroComponent
  },
  {
    path: "hero/:id",
    component: HeroDetailComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective,
    HomeComponent,
    HeroComponent,
    NavComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FootballService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
