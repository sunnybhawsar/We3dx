import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyservicesService } from '../myservices.service';
import { Blog } from '../../assets/classes/Blog'
import { Requests } from '../../assets/classes/Requests'
import { Queries } from '../../assets/classes/Queries'
import { Positions } from '../../assets/classes/Positions'
import { Contacts } from '../../assets/classes/Contacts'
import { Application } from '../../assets/classes/Applications'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  blogs: Blog[] = [{
    id: 0,
    title: '',
    content: '',
    color: '',
    overview: ''
  }];

  applications: Application[];

  applicationData: Application = {
    id: 0,
    name: '',
    contact: '',
    email: '',
    experience: '',
    position: '',
    resumeUrl: ''
  };

	Response: Requests[];
  Data: Requests[]=[{
    id: 0,
    project_description: '',
    address: '',
    sourceofinfo: '',
    contactinfo: '',
    createdAt: ''
  }];
  
  Query_res: Queries[];
  Query_data: Queries[]=[{
    id: 0,
    email: '',
    query: '',
    createdAt: ''
  }];

  Contact_res: Contacts[];
  Contact_data: Contacts[]=[{
    id: 0,
    name: 'Loading..',
    email: 'Loading..',
    contact: 'Loading..',
    subject: 'Loading..',
    text: 'Loading..',
    createdAt: 'Loading..'
  }];


  formdata9;
  position;
  details;
  isSubmitted='';
  @ViewChild('divClick') closediv: ElementRef;
  @ViewChild('openmodal') openModal: ElementRef;
  Position_res: Positions[];
  Position_data: Positions[]=[{
    id:0,
    position:'Loading',
    details:'Loading',
    createdAt:'Loading'
  }];



  constructor(private myservice: MyservicesService) { }

  ngOnInit() 
  {
    this.fetchallrequest();
    this.fetchallquery();
    this.fetchAllBlogs();
    this.fetchallposition();
    this.fetchallcontact();
    this.fetchAllApplications();

    this.formdata9 = new FormGroup({
      position:new FormControl(""),
      details:new FormControl("")
    });
  }


// Methods for Request (Hire us)
  async fetchallrequest()
  {	
  	var res=await this.myservice.showRequests();	
  	this.Response=res.data;
  	console.log(this.Response)
  }

  async fetchrequest(req)
  {
    var resp=await this.myservice.getRequest(req);
    this.Data = resp.data;
    console.log(this.Data)
  }

  async deleterequest(reqid)
  {
    var resp = await this.myservice.deleteRequest(reqid);
    console.log(resp);
    if(resp.status==200)
    {
      this.fetchallrequest();
      alert('Deleted Successfully!')
    }
  }

  // Methods for Contact

    async fetchallcontact()
  {  
    var res=await this.myservice.showContacts();  
    this.Contact_res=res.data;
    console.log(this.Contact_res)
  }

  async fetchcontact(con)
  {
    var resp=await this.myservice.getContact(con);
    this.Contact_data = resp.data;
    console.log(this.Contact_data)
  }

  async deletecontact(conid)
  {
    var resp = await this.myservice.deleteContact(conid);
    console.log(resp);
    if(resp.status==200)
    {
      this.fetchallcontact();
      alert('Deleted Successfully!')
    }
  }


  // Methods for Query

    async fetchallquery()
  {  
    var res=await this.myservice.showQueries();  
    this.Query_res=res.data;
    console.log(this.Query_res)
  }

  async fetchquery(que)
  {
    var resp=await this.myservice.getQuery(que);
    this.Query_data = resp.data;
    console.log(this.Query_data)
  }

  async deletequery(queid)
  {
    var resp = await this.myservice.deleteQuery(queid);
    console.log(resp);
    if(resp.status==200)
    {
      this.fetchallquery();
      alert('Deleted Successfully!')
    }
  }

  // Methods for Blogs

  async fetchAllBlogs() {
    var res = await this.myservice.getBlogs();
    console.log(res.data)
    this.blogs = res.data;
  }

  async deleteBlog(id) {
    var res = await this.myservice.deleteBlog(id);
    console.log(res.data)
    if(res.status==200)
    {
      this.fetchAllBlogs();
      alert('Deleted Successfully!')
    }
  }

  // Methhods for Applications

  async fetchAllApplications() {
    var res = await this.myservice.getApplications();
    console.log(res.data)
    this.applications = res.data;
  }

  async fetchApplication(id) {
    console.log(id)
    this.applicationData = this.applications[id];
    console.log(this.applicationData)
    // var res = await this.myservice.getApplications();
    // console.log(res.data)
    // this.applications = res.data;
  }

  async deleteApplication(id)
  {
    var resp = await this.myservice.deleteApplication(id);
    console.log(resp);
    if(resp.status==200)
    {
      this.fetchAllApplications();
      alert('Deleted Successfully!')
    }
  }

  // Methods for Postion

    async fetchallposition()
  {  
    var res=await this.myservice.showPositions();  
    this.Position_res=res.data;
    console.log(this.Position_res)
  }

  async fetchposition(pos)
  {
    var resp=await this.myservice.getPosition(pos);
    this.Position_data = resp.data;
    console.log(this.Position_data)
  }

  async deleteposition(posid)
  {
    var resp = await this.myservice.deletePosition(posid);
    console.log(resp);
    if(resp.status==200)
    {
      this.fetchallposition();
      alert('Deleted Successfully!')
    }
  }


  // for positions

  closeModal() {
    if(this.closediv.nativeElement.click()){
        //console.log('closed');
      }
  }

  createForm() {
    this.formdata9 = new FormGroup({
      position:new FormControl(""),
      details:new FormControl("")
    });
    if(this.openModal.nativeElement.click()){
      //console.log('open');
    }
  }

   async submit_position(data) 
  {
    console.log("clicked")

  var res = await this.myservice.addPosition(data);
    console.log(res.status)
      if(res.status==200)
      {
      this.fetchallposition();
      this.isSubmitted='modal';
      this.closeModal();
      alert("Added Successfully!");
    }
  }

}
