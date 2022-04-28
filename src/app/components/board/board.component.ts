import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';

 // import {StepsService} from 'src/app/services/StepsService';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;
  constructor( private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
   // var x=this.stepsService.stepsList;
   // alert(x);
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
