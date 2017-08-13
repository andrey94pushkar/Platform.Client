import {Component, Input} from '@angular/core';
import {GridComponent} from './grid.component';

@Component ({
  selector: 'column',
  template: ``
})
export class ColumnComponent {
 @Input() value;
 @Input() header;

 public constructor(table: GridComponent) {
    	// table.addColumn(this)
 }
}
