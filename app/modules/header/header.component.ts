import { Component,Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

 @Input() headerData:any;
 
constructor(private router:Router){
  
 }


}
