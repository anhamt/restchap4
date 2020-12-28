import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user/user-detail.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
   AppComponent,
   NavbarComponent,
   AboutComponent,
   ContactComponent,
   HomeComponent,
    UserDetailComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
