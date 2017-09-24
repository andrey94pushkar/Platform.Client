import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 
              '../../assets/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    PageScrollConfig.defaultDuration = 300;
    PageScrollConfig.defaultScrollOffset = 56;
  }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }

}