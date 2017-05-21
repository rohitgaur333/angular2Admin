import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { StudentModule } from './modules/student/student.module';
import { CommonModule } from './modules/common/common.module';
import { routing } from './routes/app.routing';
import { DummyComponent } from './modules/common/dummy.component';


@NgModule({
  declarations: [
    AppComponent
        ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    HeaderModule,
    SidebarModule,
    StudentModule,
    CommonModule  
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
