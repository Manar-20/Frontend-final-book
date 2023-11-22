import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.css']
})
export class AboutAdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    // Log out
    this.authService.logout();
    // Redirect to login page
    this.router.navigate(['']);
   }

}
