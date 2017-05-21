import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
 moduleId: module.id,
  selector: 'search',
  templateUrl:'./userdetails.component.html',
  providers:[UserService],
})
export class UserdetailsComponent  { 
    id: string;
    users: string[]=[];
    private sub: any;
    userRecord: User;
    app_id: string;
    status: string;
    org_id: string;
    name: string;
    orgstatus: string;
    roles: string;
    editDisabled:boolean;
    userbuttontext:string;
    isedited:boolean;
    
    constructor(private route:ActivatedRoute,private userService : UserService){
      //  this.userRecord['app_id']=null;
    }

    ngOnInit(){
        this.editDisabled=true;
        this.isedited=false;
        this.userbuttontext="Edit User";
   this.sub = this.route.params.subscribe(params => {
       this.id= params['id'];
       console.log("This is oninit");
         this.userService.getUser(this.id).subscribe(users => {
          this.users = users; 
          this.app_id=this.users['app_id'];
          this.status=this.users['status'];

          this.org_id=this.users['org'][0]['org_id'];
          console.log("org id : "+ this.org_id);

          this.name=this.users['org.name'];
          this.orgstatus=this.users['org'][0]['status'];
          this.roles=this.users['org.roles'];
          
    console.log(this.users);  
    
    });

      
   });
   
  
}
edituser(){
this.editDisabled=!this.editDisabled;
this.isedited=true;
}
submituser(){
this.editDisabled=!this.editDisabled;
this.isedited=false;
console.log(this.app_id);
}

ngOnDestroy(){
    this.sub.unsubscribe();
}
}

interface User {
        app_id  : string ,
        password   : string,
        status  : string,
        org: [{
            org_id: string,
            name: string,
            roles: string,
            status: string
             }]

}

