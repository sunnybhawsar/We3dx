import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';
import { Blog } from '../../assets/classes/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Blog[]

  constructor(private myService: MyservicesService) { }

  ngOnInit() {
    //fullpage_api.destroy();
    // console.log("start")
    this.fetchBlogs()
  }

  async fetchBlogs() {
    // console.log("start")
    var res = await this.myService.getBlogs()
    this.blogs = res.data;
    console.log(this.blogs)
  }
}
