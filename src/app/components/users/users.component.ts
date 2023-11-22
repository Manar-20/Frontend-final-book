import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AdminAPIService } from 'src/app/services/Admin-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(   
     private adminAPIService: AdminAPIService,
     private authService: AuthService,
     private router: Router
    ) { 
    this.users = [];
  }

  ngOnInit(): void {

      this.updateUsersList();
  }

  updateUsersList() {
    this.adminAPIService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Complete");
      }
    }
    );
  }
  

  logout(): void {
    // Log out
    this.authService.logout();
    // Redirect to login page
    this.router.navigate(['']);
   }
}
