import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../_services/index';
import { Profile } from '../../_models/index';


@Component({
  selector: 'info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
})

export class InfoComponent implements OnInit {
  public profile: Profile;

  public constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.get('Admin').subscribe(profile => {
      this.profile = profile;
    });
  }

  save(): void {
    console.log('saved!');
  }
}
