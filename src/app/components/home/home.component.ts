import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {Image} from 'src/app/model/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  sub: any;
  imageList: any;
  randomImages: any;
  id: any;

  
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    
   // images: Image[]{ };
   this.loadData();
   this.getRandom5Images();
   this.id = setInterval(() => {
     this.getRandom5Images(); 
   }, 2000);
  
  }
  loadData() {
    this.isLoading = true;
    this.sub =  this._dataService.Get5Images().subscribe(res => {
      console.log('res', res);
      this.imageList = res;
      this.getRandom5Images();
      localStorage.setItem('dataSource', this.imageList);
      this.isLoading = false;
    }, (err) => {
      console.log('err', err);
      this.isLoading = false;
    });
  
  }
  getRandom5Images(){
    var items = this.imageList;
   var newItems = [];

  for (var i = 0; i < 5; i++) {
    var idx = Math.floor(Math.random() * items.length);
    newItems.push(items[idx]);
    items.splice(idx, 1);
  }
  this.randomImages = newItems;
  console.log(newItems);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
