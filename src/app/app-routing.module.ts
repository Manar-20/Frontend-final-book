import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AboutComponent } from './components/about/about.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { UsersComponent } from './components/users/users.component';
import { AboutAdminComponent } from './components/about-admin/about-admin.component';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookDitaleUserComponent } from './components/book-ditale-user/book-ditale-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home-user',
    canActivate: [AuthGuardService],
    component: HomeUserComponent
  },
  {
    path: 'add-book',
    canActivate: [AuthGuardService],
    component: AddBookComponent
  },
  {
    path: 'about-user',
    canActivate: [AuthGuardService],
    component: AboutUserComponent
  },
  {
    path: 'home-admin',
    canActivate: [AuthGuardService],
    component: HomeAdminComponent,
  },
  {
    path: 'about-admin',
    canActivate: [AuthGuardService],
    component: AboutAdminComponent
  },
  {
    path: 'Users',
    canActivate: [AuthGuardService],
    component: UsersComponent
  },

  {
    path: 'book-details/:id',
    
    component: BookDetailComponent,
  },

  {
    path: 'book-details-user/:id',
    
    component: BookDitaleUserComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
