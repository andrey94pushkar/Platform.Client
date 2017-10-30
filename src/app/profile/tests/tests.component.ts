import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MdSort, MdDialog } from '@angular/material';
import { DeleteDialogComponent } from '../../_directives/dialogs/index';
import { Test, TestType, UserTest } from '../../_models/index';
import { UserTestDataSource} from './user-tests.datasource';
import { UserTestService } from '../../_services/index';

// data
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'tests',
  templateUrl: 'tests.component.html',
  styleUrls: ['tests.component.css'],
})

export class TestsComponent implements OnInit {
  displayedColumns: string[];
  dataSource: UserTestDataSource | null;

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild('filter') filter: ElementRef;

  public constructor(
    private dialog: MdDialog,
    private userTestService: UserTestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.displayedColumns = ['testType', 'providerId', 'actions'];
    this.dataSource = new UserTestDataSource(this.userTestService, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  startTest(row) {
    console.log(row);
    this.router.navigate(['/tower-of-london']);
  }
  showResults(row) {
    console.log(row);
  }
}
