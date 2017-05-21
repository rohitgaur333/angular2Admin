import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SidebarComponent }   from './sidebar.component';
import {Routes, RouterModule} from '@angular/router';



@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent
    ],
  exports: [ 
     SidebarComponent
  ]
})

export class SidebarModule { }