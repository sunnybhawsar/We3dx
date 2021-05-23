import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formdata;
	status;
	email;
	password;

  constructor(private myservice: MyservicesService) { }

  ngOnInit() {
  	this.formdata = new FormGroup({
         email: new FormControl(""),
         password:new FormControl("")
         });
  }


  submit_login(use) 
  {
  	console.log(use)

    this.myservice.addUser(use);
  }

}
