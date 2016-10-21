import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }         from './app.component';
import { HeroService }          from './hero.service';

import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTop: '/dashboard',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }