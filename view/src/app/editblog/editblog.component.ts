import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../../assets/classes/Blog';

import { ActivatedRoute } from '@angular/router';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
// add image resize module
import ImageResize from 'quill-image-resize-module/';
Quill.register('modules/imageResize', ImageResize);


@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css'],
})
export class EditblogComponent implements OnInit {

  form: FormGroup;
  modules = {};
  blog: Blog = {
    id: 1,
    title: 'Loading',
    content: '',
    color: '',
    overview: ''
  }

  constructor(fb: FormBuilder, private myService: MyservicesService, private route: ActivatedRoute) {
    this.fetchBlog(this.route.snapshot.params['id'])
    this.form = fb.group({
      title: this.blog.title,
      color: this.blog.color,
      content: this.blog.content
    });

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block', 'link'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['image', 'video']
      ],
      imageResize: {}
    }
  }

  ngOnInit() {
    
  }

  async fetchBlog(id) {
    var res = await this.myService.getBlog(id)
    this.blog = res.data
    //console.log(res.data)
    //console.log(await this.myService.getBlog(1))
    this.form.setValue({
      title: this.blog.title,
      color: this.blog.color,
      content: this.blog.content
    })
  }

  fetchData() {
    console.log(this.myService.editBlog(this.form.value, this.blog.id));
    // console.log(this.form.value)
    //console.log(this.extractContent(this.form.controls.content.value, true))
  }


}
