import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user/user.service';


@Component({
 moduleId: module.id,
  selector: 'register-student',
  templateUrl:'./registerstudent.component.html',
  styleUrls:['./registerstudent.component.css'],
  providers:[UserService],
})
export class RegisterStudentComponent  { 
 
    isclicked:boolean;

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

    studentRecord: string[]=[];
    constructor(private route: Router,private actroute:ActivatedRoute,private userService : UserService){
      
    }

    ngOnInit(){
        this.isclicked=false;
        
    }

    registerStudent(){
        //this.fname="rohit";
        this.isclicked=true;
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
        console.log(studentRecord);
        //service call for registration
        this.userService.createStudent(studentRecord).subscribe(student => {
          console.log(student._id);  
          this.route.navigate(['student/'+student._id]);
    
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