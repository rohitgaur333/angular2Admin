import {Injectable} from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    constructor(private http: Http){
        console.log('Search Service Initiated...');
    }
    getUsers(){
        return this.http.get('http://10.108.229.24:4000/restapi/user')
        .map(res => res.json());
    }
      getUser(id:string){
        return this.http.get('http://10.108.229.24:4000/restapi/user/'+id)
        .map(res => res.json());
    }
   
    createPost(post: any){
    	let headers = new Headers ({ 'Content-Type': 'application/json' });
    	let options: RequestOptions = new RequestOptions({ headers: headers });
    	var body = JSON.stringify({"fbname": "New value", "content": "summy text", "likes": 4,"comments": 7} );
    	console.log(body);
     return this.http.post('http://10.108.229.24:4000/user/status', post ,options)
    .map(res => res.json());
}

  createStudent(studentRecord: any){
    	let headers = new Headers ({ 'Content-Type': 'application/json' });
    	let options: RequestOptions = new RequestOptions({ headers: headers });
    	console.log(studentRecord);
     return this.http.post('http://10.108.229.24:4000/restapi/student', studentRecord ,options)
    .map(res => res.json());
}

createTeacher(teacherRecord: any){
    	let headers = new Headers ({ 'Content-Type': 'application/json' });
    	let options: RequestOptions = new RequestOptions({ headers: headers });
    	console.log(teacherRecord);
     return this.http.post('http://10.108.229.24:4000/restapi/teacher', teacherRecord ,options)
    .map(res => res.json());
}

getStudents(){
        return this.http.get('http://10.108.229.24:4000/restapi/student')
        .map(res => res.json());
    }
          getStudent(id:string){
        return this.http.get('http://10.108.229.24:4000/restapi/student/'+id)
        .map(res => res.json());
    }

        searchStudents(fname:string){
            console.log('in searh fun');
        return this.http.get('http://10.108.229.24:4000/restapi/student?fname='+fname)
        .map(res => res.json());
    }

    updateStudent(studentRecord: any,id: string){
    	let headers = new Headers ({ 'Content-Type': 'application/json' });
    	let options: RequestOptions = new RequestOptions({ headers: headers });
    	console.log(studentRecord);
     return this.http.put('http://10.108.229.24:4000/restapi/student/'+id, studentRecord ,options)
    .map(res => res.json());
}

}