import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAPIService } from 'src/app/services/Admin-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Book } from 'src/app/models/Book.model';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  idBook!: number;
  book!: any;
  reviews: any[] = [];
  ratings: any[] = [];
  commentInput: FormControl;
  ratingForm: FormGroup;
  selectedRating: number | null = null;
  reviewForm: FormGroup;
  userName!: string;
  editMode: boolean = false;
  editForm!: FormGroup;
  name: any

  constructor(private route: ActivatedRoute,
    private adminAPIService: AdminAPIService,
    private authService: AuthService,
    private router: Router, 
    private fb: FormBuilder
    ) {
      this.ratingForm = this.fb.group({
        rating: [null]
      });this.commentInput = new FormControl('', [Validators.required]);
      this.reviewForm = new FormGroup({
        comment: this.commentInput
      });
      
    
      this.userName = JSON.parse(localStorage.getItem("currentUser") as string).name;
      this.editForm = this.fb.group({
        releaseYear: ["", Validators.required],
        language: ["", Validators.required],
        story: ["", Validators.required],
        category: ["", Validators.required],
    });
    this.name = JSON.parse(localStorage.getItem("currentUser") as string).name;
}
      
    

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idBook = +params['id'];
      this.getBookDetails();
      this.getReviews();
      this.getRatings();
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
  getReviews(){
    this.adminAPIService.getReviews(this.idBook).subscribe(
      (data) => {
        this.reviews = data;
      },
      error => {
        console.error('Error fetching review details:', error);
      }
    )
  }
  
  getRatings(){
    this.adminAPIService.getRatings(this.idBook).subscribe(
      (data) => {
        this.ratings = data;
      },
      error => {
        console.error('Error fetching rating details:', error);
      }
    )
  }
  enterEditMode(): void {
    this.editMode = true;
    this.editForm.enable();
  }

  saveChanges(): void {
    this.adminAPIService.updateBook(this.book).subscribe(
      (response: string) => {
        if (response.includes('Book updated Successfully')) {
          this.editMode = false;
          this.editForm.disable();
          this.getBookDetails(); // Fetch updated details after successful update
        } else {
          console.error('Error updating Book. Unexpected response:', response);
        }
      },
      (error) => {
        console.error('Error updating Book. Response body:', error.error);
      }
    );
  }
  deleteBook(): void {
    this.adminAPIService.deleteBook(this.idBook).subscribe(
      (response: string) => {
        if (response.includes('Book deleted Successfully')) {
          this.router.navigate(['/home-admin'])
          } else {
          console.error('Error deleting Book. Unexpected response:', response);
        }
      },
      (error) => {
        console.error('Error deleting Book. Response body:', error.error);
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


