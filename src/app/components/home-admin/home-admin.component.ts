import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAPIService } from 'src/app/services/Admin-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  name: string | null;
  books: any[];

  constructor(    
    private adminAPIService: AdminAPIService,
    private authService: AuthService,
    private router: Router
    ) {
    this.name= "";
    this.books = [];
   }
   
  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem("currentUser") as string).name;
    this.updatebooksList();

  }

  updatebooksList() {
    this.adminAPIService.getBooksAll().subscribe({
      next: (data) => {
        this.books = data;
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
