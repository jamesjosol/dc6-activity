import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-randomizer',
  templateUrl: './number-randomizer.component.html',
  styleUrls: ['./number-randomizer.component.css']
})
export class NumberRandomizerComponent {

  currentNum = 0

  increment() {
    this.currentNum += Math.floor(Math.random() * 100)
  }

  decrement() {
    this.currentNum -= Math.floor(Math.random() * 100)
  }

  reset() {
    this.currentNum = 0
  }

}
