import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';
import { StepsService } from 'src/app/services/steps.service';

 // import {StepsService} from 'src/app/services/StepsService';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;
  stepsList: any;
  index: number =0;
  constructor( private ngxChessBoardService: NgxChessBoardService, private stepsService:StepsService) { }

  ngOnInit(): void {
     this.stepsService.getSteps().subscribe(res => {
      console.log('res', res);
      this.stepsList = res;
      
    }, (err) => {
      console.log('err', err);
      
    });
  
  }
  reset() {
    this.index =0;
    this.board.reset();
}
next(){
  const step = this.stepsList[this.index];
  this.board.move(step[0]+step[1]);
   this.index++;
   if(this.index==this.stepsList.length-1){
     alert("win!!!");
   }
 
}
back(){
   this.index--;
   this.board.undo();
}

}
