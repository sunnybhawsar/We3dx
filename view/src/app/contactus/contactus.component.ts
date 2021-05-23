import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

	formdata;
	name;
	email;
	subject;
	contact;
	text;

  constructor(private myservice: MyservicesService) { 

  }

  ngOnInit() {

  	  	this.formdata = new FormGroup({
        name:new FormControl(""),
        email:new FormControl(""),
        contact:new FormControl(""),
        subject:new FormControl(""),
        text:new FormControl(""),
      });
  }

      submit_contact(data) 
  {
    console.log(data)
  this.myservice.addContact(data)
  .then(function(res){

    console.log(res.status)
    if(res.status==200)
    {
      alert("Inspired!");
    }
  }
    );
  }

}
