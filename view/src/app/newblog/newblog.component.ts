import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
// add image resize module
import ImageResize from 'quill-image-resize-module/';
Quill.register('modules/imageResize', ImageResize);


@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css'],
})
export class NewblogComponent implements OnInit {

  form: FormGroup;
  modules = {};

  constructor(fb: FormBuilder, private myService: MyservicesService) {
    this.form = fb.group({
      title: [''],
      color: [''],
      content: ['']
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
    //fullpage_api.destroy();
  }

  fetchData() {
    console.log(this.myService.addBlog(this.form.value));
    // console.log(this.form.value)
    //console.log(this.extractContent(this.form.controls.content.value, true))
  }


}
