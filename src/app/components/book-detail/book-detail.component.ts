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
  editMode: boolean = false;
  editForm!: FormGroup;
  name: any

  constructor(private route: ActivatedRoute,
    private adminAPIService: AdminAPIService,
    private authService: AuthService,
    private router: Router, 
    private fb: FormBuilder
    ) {  
    
      this.editForm = this.fb.group({
        author: ["", Validators.required],
        title: ["", Validators.required],
        description: ["", Validators.required],
        category: ["", Validators.required],
    });
    this.name = JSON.parse(localStorage.getItem("currentUser") as string).name;
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
        this.editForm.setValue({
          author: this.book.author,
          title: this.book.title,
          description: this.book.description,
          category: this.book.category,
        })
      },
      error => {
        console.error('Error fetching Book details:', error);
      }
    );
  }
  
  enterEditMode(): void {
    this.editMode = true;
    this.editForm.enable();
  }

  saveChanges(): void {

    const updatedBook ={ ...this.book, ...this.editForm.value}
    this.adminAPIService.updateBook(this.idBook,updatedBook).subscribe(
      (response: string) => {
        if (response.includes('Book updated successfully')) {
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


