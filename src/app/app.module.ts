import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChessBoardModule } from 'ngx-chess-board';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepsService } from './services/steps.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    NgxChessBoardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [StepsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
