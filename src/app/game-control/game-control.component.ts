import { Component, OnInit, EventEmitter, Output } from '@angular/core';



// var counter: number = 0;
// setInterval(function(){
//   console.log(counter);
//   counter++
//   if (counter === 10) {
//     clearInterval(counter);
//   }
// }, 1000);

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  n: number = 0;

  @Output() NumberCreated = new EventEmitter<number>();

  
  timer: any;
  disableBtn: boolean = false;


  constructor() {
    
}

  ngOnInit() {
  }


  gameStart(){
    this.disableBtn = true;
    this.timer = setInterval(() => {
      this.n += 1;
      this.NumberCreated.emit(this.n);
    }, 1000);
  }

  gameStop(){
    this.disableBtn = 
    !this.disableBtn;
    clearInterval(this.timer);
  }


}


