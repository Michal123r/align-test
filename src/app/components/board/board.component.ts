import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService } from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;
  constructor(private ngxChessBoardService: NgxChessBoardService) { }

  ngOnInit(): void {
  }
  reset() {
    this.board.reset();
}
next(){

}
back(){
  
}

}
