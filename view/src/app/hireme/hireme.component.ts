import { Component, OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { MyservicesService } from '../myservices.service';
//import {MyserviceService} from '../myservice.service';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.css']
})

export class HiremeComponent implements OnInit {
  current = 0;
  items: Array<any>;
  formactive: boolean ;
  activeposition: string ;
  latestDate;
  userData;
  submitted: boolean ;
  formdata;
  fusername: string;
  femail: string;
  fcontact: string;
  fposition: string;
  fresume: File;
  fresumeUrl: string;
  fexp: string;
  
  constructor(private myservice: MyservicesService) {
    this.submitted = false;
   }

  ngOnInit() {
    this.formdata = new FormGroup({
      fusername: new FormControl(''),
      femail: new FormControl(''),
      fcontact: new FormControl(''),
      fposition: new FormControl(''),
      fresume: new FormControl(''),
      fresumeUrl: new FormControl(''),
      fexp: new FormControl('')
    });
    this.formactive = false;
    this.fetchAllPositions();
  }

  displayform(data) {
    this.activeposition = data.position;
    this.formactive = true;
    console.log(data);
    console.log(this.activeposition);
  }
  selectedOption(data) {
    if (data.position === this.activeposition) {
      return true;
    } else {
      return false;
    }
  }
  async onFileSelected(event) {
    this.fresume = event.target.files[0];
    var fd = new FormData();
    fd.append('resume', this.fresume);
    var res = await this.myservice.uploadResume(fd)
    if(res.status == 200) {
      alert("Uploaded")
      this.fresumeUrl = res.data;
    }
    else {
      alert("Unable to upload your resume. Please ensure correct formats");
    }
  }

  async onSubmit(data) {
    console.log(data)
    var fData = {
      name: data.fusername,
      contact: data.fcontact,
      email: data.femail,
      position: this.activeposition,
      experience: data.fexp,
      resumeUrl: data.fresumeUrl
    }
    this.submitted = true;
    var res = await this.myservice.postForm(fData)
    if (res.status == 200) {
      alert("Job Application Submitted")
    }
  }

  async fetchAllPositions() {
    var res = await this.myservice.showPositions();
    console.log(res.data);
    this.items = res.data;
    console.log(this.items)
  }
}
