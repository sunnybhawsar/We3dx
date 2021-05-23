import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})


export class MyservicesService {

  uri = 'http://localhost:8081';
  api;
  constructor() {
    this.api=axios.create({
      baseURL:this.uri
    })
  }

  //For hireme

  uploadResume(data) {
    //console.log(data)
    return this.api.post('/upload', data);
  }

  postForm(data) {
    console.log(data);
    return this.api.post('/hirings', data);
  }

  getApplications() {
    return this
    .api.get(`hirings`);
  }

  getApplication(appId) {
    return this
    .api.get(`hirings/${appId}`);
  }

  deleteApplication(appId) {
    return this
    .api.delete(`hirings/${appId}`);
  }

  // For Requests (HireUs)

  addRequest(obj) {
    return this
    .api.post(`requests`, obj);
  }

  showRequests(){
    return this
    .api.get(`requests`);
  }

  getRequest(reqId){
  return this
  .api.get(`requests/${reqId}`);
  }

  deleteRequest(reqId){
  return this
  .api.delete(`requests/${reqId}`);
  }


// For Queries

    addQuery(obj) {
    return this
    .api.post(`queries`, obj);
  }

  showQueries(){
    return this
    .api.get(`queries`);
  }

  getQuery(queryId){
  return this
  .api.get(`queries/${queryId}`);
  }

  deleteQuery(queryId){
  return this
  .api.delete(`queries/${queryId}`);
  }


// For Contacts

  addContact(obj) {
    return this
    .api.post(`contacts`, obj);
  }

  showContacts(){
    return this
    .api.get(`contacts`);
  }

  getContact(contId){
  return this
  .api.get(`contacts/${contId}`);
  }

  deleteContact(contId){
  return this
  .api.delete(`contacts/${contId}`);
  }

  //For Blogs

  addBlog(blog: Object) {
    return this
    .api.post(`blogs`, blog);
  }

  getBlog(blogId) {
    return this
    .api.get(`blog/${blogId}`);
  }

  getBlogs() {
    return this
    .api.get(`blogs`);
  }

  editBlog(blog: Object, blogId) {
    return this
    .api.put(`blog/${blogId}`, blog);
  }

  deleteBlog(blogId) {
    return this
    .api.delete(`blog/${blogId}`);
  }

  // For Positions

  addPosition(obj) {
    return this
    .api.post(`positions`, obj);
  }

  showPositions(){
    return this
    .api.get(`positions`);
  }

  getPosition(posId){
  return this
  .api.get(`positions/${posId}`);
  }

  deletePosition(posId){
  return this
  .api.delete(`positions/${posId}`);
  }


  // For Register

  addUser(obj) {
    return this
    .api.post(`users`, obj);
  }

  showUsers(){
    return this
    .api.get(`users`);
  }

  getUser(uId){
  return this
  .api.get(`users/${uId}`);
  }

}
