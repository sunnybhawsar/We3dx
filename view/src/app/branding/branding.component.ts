import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {

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

 this.loadScript('../assets/scripts/Scripts.js');
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
