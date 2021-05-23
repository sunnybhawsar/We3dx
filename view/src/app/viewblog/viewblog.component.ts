import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { Blog } from '../../assets/classes/Blog';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {

  blog: Blog = {
    id: 1,
    title: 'Loading',
    content: '',
    color: '',
    overview: ''
  }

  constructor(private myService: MyservicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    //fullpage_api.destroy();
    this.fetchBlog(this.route.snapshot.params['id'])
  }

  async fetchBlog(id) {
    var res = await this.myService.getBlog(id)
    this.blog = res.data
    //console.log(res.data)
    //console.log(await this.myService.getBlog(1))
  }

}
