import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAPIService } from 'src/app/services/Admin-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  CreateBookForm: FormGroup;
  idBookInput: FormControl;
  titleInput: FormControl;
  authorInput: FormControl;
  descriptionInput: FormControl;
  imgUrlInput: FormControl;
  categoryInput : FormControl;

  Msg: string;
  constructor( private router: Router,
    private adminAPIService: AdminAPIService,
    private authService : AuthService) {this.idBookInput = new FormControl('', [Validators.required]);
    this.titleInput = new FormControl('', [Validators.required]);
    this.authorInput = new FormControl('', [Validators.required]);
    this.descriptionInput = new FormControl('', [Validators.required]);
    this.imgUrlInput = new FormControl('', [Validators.required]);
    this.categoryInput = new FormControl('', [Validators.required]);
    this.CreateBookForm = new FormGroup({
      idBook: this.idBookInput,
      title: this.titleInput,
      author: this.authorInput,
      description: this.descriptionInput,
      imgUrl: this.imgUrlInput,
      category: this.categoryInput,
    });
    this.Msg = '';
  }

    
  ngOnInit(): void {
  }
  addBook() {

    
    this.adminAPIService.createNewBook(this.CreateBookForm.value).subscribe({
      next: () => {
        // Clear form values
        this.CreateBookForm.reset();
        this.Msg = ' added successfully!';
      },
      error: (error) => {
        console.log(error);
        this.Msg = 'Error adding book.';
      },
      complete: () => {
        console.log('Book Added!');
      }
    });
  }

  logout(): void {
    // Log out
    this.authService.logout();
    // Redirect to login page
    this.router.navigate(['']);
}
}
