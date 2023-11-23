import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { UsersComponent } from './components/users/users.component';
import { AboutAdminComponent } from './components/about-admin/about-admin.component';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookDitaleUserComponent } from './components/book-ditale-user/book-ditale-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,

    
    FooterComponent,
    AboutComponent,
    HomeUserComponent,
    HomeAdminComponent,
    UsersComponent,
    AboutAdminComponent,
    AboutUserComponent,
    AddBookComponent,
    BookDetailComponent,
    BookDitaleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
