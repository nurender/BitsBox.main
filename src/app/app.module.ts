import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ALERTComponent } from './alert/alert.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http'


let routes : Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
    {
      path: 'chat',
      component: ChatComponent,
    },
      {
        path: 'alert',
        component: ALERTComponent,
      }
  ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  // },
  {
    path: 'signup',
    component: SignupComponent,
  },
  // {
  //   path: 'alert',
  //   component: ALERTComponent,
  // },
  {
    path : '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ALERTComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
