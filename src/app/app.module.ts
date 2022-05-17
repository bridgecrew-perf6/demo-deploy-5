import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

import { GithubFollowersService } from './github-followers/github-followers.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubFollowersComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent }
    ])
  ],
  providers: [GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
