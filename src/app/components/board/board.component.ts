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
  stepsList: any=[];
  constructor( private ngxChessBoardService: NgxChessBoardService, private stepsService:StepsService) { }

  ngOnInit(): void {
     this.stepsService.getSteps().subscribe(res => {
      console.log('res', res);
      this.stepsList = res;
      
    }, (err) => {
      console.log('err', err);
      
    });
  // this.stepsService.getSteps();
  }
  reset() {
    this.board.reset();
}
next(){
this.board.move('d2d4');
}
back(){
  

}

}
