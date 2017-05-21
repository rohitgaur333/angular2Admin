import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {HeaderInterface} from './modules/header/header.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  header_data:HeaderInterface;

  constructor(private _http: Http){
  }

  ngOnInit() { 
      this.getHeaderData()
            .subscribe(header_data_response => this.header_data=header_data_response);
            }

      getHeaderData() {
        const url = 'assets/header.mockdata.json';
        return this._http.get(url)
            .map(header_data_response =>header_data_response.json());
    }

}
