import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
})

export class InfoComponent {

  public constructor(
    private router: Router
  ) { }
}
