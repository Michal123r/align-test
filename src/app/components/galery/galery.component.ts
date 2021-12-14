import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  selectedImgBig: any;

  constructor(private ref: ChangeDetectorRef) { }
  @Input() images: any;
  imagesToShow :any;
  ngOnInit(): void {
    if(this.images && this.images.length == 5)
    {
      this.imagesToShow = [];
      this.imagesToShow.push(this.images[1]);
      this.imagesToShow.push(this.images[2]);
      this.imagesToShow.push(this.images[3]);
      this.selectedImgBig = this.images[3];
    }
  }
  
  shiftLeft(){
    this.imagesToShow = [];
    this.imagesToShow.push(this.images[0]);
    this.imagesToShow.push(this.images[1]);
    this.imagesToShow.push(this.images[2]);
    this.ref.detectChanges();
  }
  shiftRigth(){
    this.imagesToShow = [];
    this.imagesToShow.push(this.images[1]);
    this.imagesToShow.push(this.images[2]);
    this.imagesToShow.push(this.images[3]);
    this.ref.detectChanges();
  }
  selectedImg(img: any){
    this.selectedImgBig = img;
  }

}
