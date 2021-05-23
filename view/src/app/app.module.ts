import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { MnFullpageService } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { AdminComponent } from './admin/admin.component';
import { NewblogComponent } from './newblog/newblog.component';

import { MyservicesService } from './myservices.service';
import { SafePipe } from './safe.pipe';
import { EditblogComponent } from './editblog/editblog.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HireusComponent } from './hireus/hireus.component';
import { HiremeComponent } from './hireme/hireme.component';
import { IndexComponent } from './index/index.component';
import { HealthComponent } from './health/health.component';
import { BrandingComponent } from './branding/branding.component';
import { Printing3dComponent } from './printing3d/printing3d.component';
import { ItComponent } from './it/it.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ViewblogComponent,
    AdminComponent,
    NewblogComponent,
    SafePipe,
    EditblogComponent,
    AboutComponent,
    ContactusComponent,
    HireusComponent,
    HiremeComponent,
    IndexComponent,
    HealthComponent,
    BrandingComponent,
    Printing3dComponent,
    ItComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
    //MnFullpageModule.forRoot(), // Don't forget to call .forRoot() static method
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
      },

      {
        path: 'about',
        component: AboutComponent
      },

      {
        path: 'hireme',
        component: HiremeComponent
      },

      {
        path: 'hireus',
        component: HireusComponent
      },

      {
        path: 'health',
        component: HealthComponent
      },
      {
        path: 'branding',
        component: BrandingComponent
      },

      {
        path: 'it',
        component: ItComponent
      },

      {
        path: '3dprinting',
        component: Printing3dComponent
      },

      {
        path: 'contactus',
        component: ContactusComponent
      },

      {
        path: 'blogs',
        component: BlogComponent
      },

      {
        path: 'blogs/:id',
        component: ViewblogComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'admin',
        component: AdminComponent
      },

      {
        path: 'newblog',
        component: NewblogComponent
      },

      {
        path: 'blogs/:id/edit',
        component: EditblogComponent
      }
  ])
  ],
   providers: [MyservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
