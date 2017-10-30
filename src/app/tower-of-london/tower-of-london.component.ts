import { Component, OnInit } from '@angular/core';
import { tol } from './tol/tol';

@Component({
  selector: 'app-tower-of-london',
  templateUrl: './tower-of-london.component.html',
  styleUrls: ['./tower-of-london.component.css']
})
export class TowerOfLondonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    tol.initGame();
  }
}
