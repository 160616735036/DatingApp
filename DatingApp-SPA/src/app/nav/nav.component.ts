import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 model: any = {};

  constructor(public authservice: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  login() {
   this.authservice.login(this.model).subscribe(next => {
    this.alertify.success('logged in successfully');
   }, error => {
    this.alertify.error(error);
   }, () => {
     this.router.navigate(['/members']);
   }
   );
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    return this.authservice.loggedIn();
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  // tslint:disable-next-line: typedef
  AddAccount(){
    this.authservice.loggedIn();
    this.alertify.addaccount('Add another account');
    this.router.navigate(['/home']);
  }

}
