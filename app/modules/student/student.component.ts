import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({

    selector:'student-component',
    templateUrl:'./student.component.html'
})

export class StudentComponent  {
constructor(private router:Router){}
    getIndex(){
 this.router.navigate(['/student',{outlets:{'student-index':'index' }}])
}
getDetails(){
 this.router.navigate(['/student',{outlets:{'student-details':['details'],'student-dummy':['dummy']}}])
}
getDummy(){
 this.router.navigate(['/student',{outlets:{'student-dummy':'dummy' }}])
}
}