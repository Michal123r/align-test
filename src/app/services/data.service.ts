import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Get5Images() {
    return this._http.get('https://picsum.photos/v2/list?page=1&limit=100');
  }
  constructor(private _http: HttpClient) {
  }

  // getRepos(value) {
  //   return this._http.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc&limit=10`);
  // }
  GetRandom5Image() {  
    return this._http.get('https://localhost:5001/cities');

  }

 
}

