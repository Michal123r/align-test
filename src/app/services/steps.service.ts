import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  stepsUrl: string="";

  constructor(private http: HttpClient) { }
  getSteps(): Observable<string[]> {
    return this.http.get<string[]>(this.stepsUrl)
  }
}
