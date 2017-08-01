import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})

export class NavigationComponent {

  public constructor(private router: Router) { }
  logout(): void {
    this.router.navigate(['/login']);
  }
}
