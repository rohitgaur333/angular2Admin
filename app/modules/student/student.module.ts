import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StudentComponent }   from './student.component';
import { StudentDetailComponent }   from './student-details.component';
import { StudentRoutingModule } from './student.routing';
import {Routes, RouterModule} from '@angular/router';



@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    StudentRoutingModule    
  ],
  declarations: [
    StudentComponent,
    StudentDetailComponent
    ],
  exports: [ StudentComponent
     
  ]
})

export class StudentModule { }