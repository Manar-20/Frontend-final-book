import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAPIService } from 'src/app/services/Admin-api.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    this.name = "";
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

}
