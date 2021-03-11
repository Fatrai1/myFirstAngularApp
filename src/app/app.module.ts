import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './service/football.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }
