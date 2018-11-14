import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { CompaniPageComponent } from './compani-page/compani-page.component';
import { SingleCompaniPageComponent } from './single-compani-page/single-compani-page.component';


let routes : Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // children:[
    //   {
    //     path: 'view-page',
    //     redirectTo:'view-page',
    //     pathMatch:'full'
    //   }
    // ]
  },
  {
    path: 'view-page',
    component: ViewPageComponent 
  },
  {
    path: 'compani-page',
    component: CompaniPageComponent
  },
  {
    path : 'single-compani-page',
    component: SingleCompaniPageComponent
  },
  {
    path : '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ViewPageComponent,
    CompaniPageComponent,
    SingleCompaniPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
