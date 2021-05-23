import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

formdata;
status;
query;
email;
  

    constructor(private myservice: MyservicesService) {  }

  ngOnInit() {
      this.formdata = new FormGroup({
         query: new FormControl(""),
         email:new FormControl("")
         });


  }
    submit_query(data) 
  {

  this.myservice.addQuery(data)
  .then(function(res){
    console.log(res.status)
    if(res.status==200)
    {
      alert("Sent");
    }
  }
    );
  }

}
