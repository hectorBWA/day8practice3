import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  
  count: number = 0;


   gameStart() {
        this.count++;
        }


  constructor() {
    
}

  ngOnInit() {
  }

}
