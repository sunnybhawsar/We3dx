import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  formdata;
  status;
  query;
  email;

  constructor(private myservice: MyservicesService) {

  }

  ngOnInit() {
    this.formdata = new FormGroup({
      query: new FormControl(""),
      email:new FormControl("")
    });
  }

  ngAfterViewInit() {
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.1/vendors/scrolloverflow.min.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.1/fullpage.min.js');
    //this.loadScript('../assets/scripts/Scripts.js');
    this.loadScript('../assets/scripts/Scripts.js');
  }

  ngOnDestroy() {
    //this.removeScript('#full');
    this.loadScript('../assets/scripts/Destroy.js');
    //this.removeScript("full")
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

  submit_query(data) {
    this.myservice.addQuery(data)
    .then(function(res){
      console.log(res.status)
      if(res.status==200) {
        alert("Sent");
      }
    });
  }

  // public removeScript(id: string) {
  //   const body = <HTMLDivElement> document.body;
  //   body.removeChild(id: string)
  // }

}
