import { Component, OnInit } from '@angular/core';
import { Ctol } from './ctol/create-tower-of-london-min';

@Component({
    selector: 'app-create-tower-of-london',
    templateUrl: 'create-tower-of-london.component.html',
    styleUrls: ['create-tower-of-london.component.css']
  })

  export class CreateTowerOfLondonComponent implements OnInit {

    public constructor() { }

      ngOnInit() {
        Ctol.initFunction();
      }

  }