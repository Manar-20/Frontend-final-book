import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAPIService } from 'src/app/services/Admin-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book-ditale-user',
  templateUrl: './book-ditale-user.component.html',
  styleUrls: ['./book-ditale-user.component.css']
})
export class BookDitaleUserComponent implements OnInit {

  idBook!: number;
  book!: any;
  userName!: string;
  name: any

  constructor(private route: ActivatedRoute,
    private adminAPIService: AdminAPIService,
    private authService: AuthService,
    private router: Router, 
    private fb: FormBuilder
    ) {

    
      this.userName = JSON.parse(localStorage.getItem("currentUser") as string).name;
     
}
      
    

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idBook = +params['id'];
      this.getBookDetails();

    });
  }
  getBookDetails() {
    this.adminAPIService.getBooksById(this.idBook).subscribe(
      (data) => {
        this.book = data;
      },
      error => {
        console.error('Error fetching Book details:', error);
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


