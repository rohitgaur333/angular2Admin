import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user/user.service';


@Component({
 moduleId: module.id,
  selector: 'register-teacher',
  templateUrl:'./registerteacher.component.html',
  styleUrls:['./registerteacher.component.css'],
  providers:[UserService],
})
export class RegisterTeacherComponent  { 
 
    isclicked:boolean;

 	fname: string;
	mname: string;
	lname: string;
	age: number;
	gender: string;
	specialization:string;
	mobile:number;
	previous_school:string;
    address: string;
    teacherRecord: string[]=[];
    constructor(private route: Router,private actroute:ActivatedRoute,private userService : UserService){
      
    }

    ngOnInit(){
        this.isclicked=false;
        
    }

    registerTeacher(){
        //this.fname="rohit";
        this.isclicked=true;
        let teacherRecord: Teacher = {
                fname : this.fname,
            	mname: this.mname,
	            lname: this.lname,
                age: this.age,
                gender: this.gender,
                mobile:this.mobile,
                specialization:this.mobile,
                previous_school:this.previous_school,
                address:this.address
        }
        console.log(teacherRecord);
        //service call for registration
        this.userService.createTeacher(teacherRecord).subscribe(teacher => {
          console.log(teacher._id);  
          this.route.navigate(['teacher/'+teacher._id]);
    
    });


    }


ngOnDestroy(){
    //this.sub.unsubscribe();
}



}

interface Teacher{
    fname: string;
    mname: string;
	lname: string;
	age: number;
	gender: string;
	mobile:number;
    specialization:number;
	previous_school:string;
    address: string;
}