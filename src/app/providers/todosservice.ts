import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = "https://jsonplaceholder.typicode.com";


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