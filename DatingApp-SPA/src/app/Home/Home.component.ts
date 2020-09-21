import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
registerMode=false;
values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registertoggle() {
    this.registerMode = true;
  }

  getvalues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
     this.values = response;
    }, error => {
      console.log(error);
    } );
}
   cancelRegisterMode(registerMode: boolean) {
  this.registerMode = registerMode;
  }
}
