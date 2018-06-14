import { Component, OnInit } from '@angular/core';



var counter: number = 0;
setInterval(function(){
  console.log(counter);
  counter++
  if (counter === 10) {
    clearInterval(counter);
  }
}, 1000);

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  
 


  constructor() {
    
}

  ngOnInit() {
  }

}


