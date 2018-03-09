import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = "http://localhost:3004";


@Injectable()
export class TodosService {
  

  constructor( public http: HttpClient) { 
    console.log('TodosService constructor');
  }


  getTodos():Observable<any>{
    let url = END_POINT + '/todos?userId=2';
    console.log(`TodosService getTodos ${url}`);

    return this.http.get(url);

  }



}