import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {Image} from 'src/app/model/image';
import * as _ from "lodash";

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
  allImages: any;
  

  
  constructor(private _dataService: DataService,private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    
   // images: Image[]{ };
   this.loadData();
   //this.getRandom5Images();
  

  
  }
  loadData() {
    this.isLoading = true;
    this.sub =  this._dataService.Get5Images().subscribe(res => {
      console.log('res', res);
      this.imageList = res;
      this.allImages = _.cloneDeep(res);
    
      setInterval(() => 
      this.getRandom5Images(),3000)
  
      this.isLoading = false;
    }, (err) => {
      console.log('err', err);
      this.isLoading = false;
    });
  
  }
  getRandom5Images(){
    if(this.imageList.length < 5){
      this.imageList = this.allImages;
    }
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
