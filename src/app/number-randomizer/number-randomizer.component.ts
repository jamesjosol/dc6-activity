import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-randomizer',
  templateUrl: './number-randomizer.component.html',
  styleUrls: ['./number-randomizer.component.css']
})
export class NumberRandomizerComponent {

  currentNum = 0

  increment = () => this.currentNum += this.rand()
  
  decrement = () => this.currentNum -= this.rand() 

  rand = () => Math.floor(Math.random() * 10) + 1

  reset = () => this.currentNum = 0

}
