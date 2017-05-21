import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user/user.service';

@Component({
 moduleId: module.id,
  selector: 'student-details',
  templateUrl:'./studentdetail.component.html',
  styleUrls:['./studentdetail.component.css'],
  providers:[UserService],
})
export class StudentDetailComponent  { 
 
    isclicked:boolean;
    id: string;
    private sub: any;
 	fname: string;
	mname: string;
	lname: string;
	age: number;
	gender: string;
	class:string;
	section:string;
	student_mobile:number;
	father_name:string;
	father_mobile:number;
	mother_name:string;
	mother_mobile:number;
	previous_school:string;
    students:string[]=[];

    isedited:boolean;
    editDisabled:boolean;
    userbuttontext:string;
   
    constructor(private route:ActivatedRoute,private userService : UserService){
      
            this.sub = this.route.params.subscribe(params => {
            this.editDisabled=true;
            this.isedited=false;
            this.userbuttontext="Edit";

            this.id= params['id'];
            console.log(this.id);
            this.userService.getStudent(this.id).subscribe(student => {
            console.log(student); 
            this.students = student; 
            this.fname= this.students['fname'];
            this.lname= this.students['lname'];
            this.mname=this.students['mname'];

            this.age=this.students['age'];
            this.gender=this.students['gender'];
            this.mname=this.students['mname'];
             this.class=this.students['class'];
            this.section=this.students['section'];
            this.student_mobile=this.students['student_mobile'];
            this.father_name=this.students['father_name'];
            this.father_mobile=this.students['father_mobile'];
             this.mother_name=this.students['mother_name'];
             this.mother_mobile=this.students['mother_mobile'];
              this.previous_school=this.students['previous_school'];
           
            });
       });
    }

    ngOnInit(){
        this.editDisabled=true;
        this.isedited=false;
        this.userbuttontext="Edit";
    }

    editStudent(){
        this.editDisabled=!this.editDisabled;
        this.isedited=true;
        this.userbuttontext="Save";
    }
    
    saveStudent(){
        this.editDisabled=!this.editDisabled;
        this.isedited=false;
        this.userbuttontext="Edit";
        
        let studentRecord: Student = {
                fname : this.fname,
            	mname: this.mname,
	            lname: this.lname,
                age: this.age,
                gender: this.gender,
                class:this.class,
                section:this.section,
                student_mobile:this.student_mobile,
                father_name:this.father_name,
                father_mobile:this.father_mobile,
                mother_name:this.mother_name,
                mother_mobile:this.mother_mobile,
                previous_school:this.previous_school
                
        }

      //service call for registration
        this.userService.updateStudent(studentRecord,this.id).subscribe(student => {
          console.log(student);  
    
    });
    }


ngOnDestroy(){
    //this.sub.unsubscribe();
}



}

interface Student{
    fname: string;
    mname: string;
	lname: string;
	age: number;
	gender: string;
	class:string;
	section:string;
	student_mobile:number;
	father_name:string;
	father_mobile:number;
	mother_name:string;
	mother_mobile:number;
	previous_school:string;
}