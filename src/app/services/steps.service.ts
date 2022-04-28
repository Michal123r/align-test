import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StepsService {
  

  constructor(private http: HttpClient) { }

 
 
  getSteps(){
    return this.http.get('http://localhost:5000/Chess');
  }
}
