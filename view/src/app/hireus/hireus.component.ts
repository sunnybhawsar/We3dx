import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-hireus',
  templateUrl: './hireus.component.html',
  styleUrls: ['./hireus.component.css']
})
export class HireusComponent implements OnInit {

formdata1;
formdata2;

project_description;
sourceofinfo;
address;
contactinfo;

query;
email;

status;

  constructor(private myservice: MyservicesService) {  }

  ngOnInit() {
      //fullpage_api.destroy();

      this.loadScript('../assets/scripts/Scripts.js');

      this.formdata1 = new FormGroup({
         project_description: new FormControl(""),
         address:new FormControl(""),
         sourceofinfo:new FormControl(""),
         contactinfo:new FormControl("")
      });

      this.formdata2 = new FormGroup({
        query:new FormControl(""),
        email:new FormControl("")
      });


  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
    submit_data(data) 
  {

  this.myservice.addRequest(data)
  .then(function(res){
    console.log(res.status)
    if(res.status==200)
    {
      alert("Sent");
    }
  }
    );
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
