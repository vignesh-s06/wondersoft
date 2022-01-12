import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'pages',
    component:PagesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
