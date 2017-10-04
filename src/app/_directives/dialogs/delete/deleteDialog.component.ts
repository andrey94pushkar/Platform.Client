import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'deleteDialog',
  templateUrl: 'deleteDialog.component.html',
  styleUrls: ['deleteDialog.component.css'],
})

export class DeleteDialogComponent {

  public constructor(
    private dialogRef: MdDialogRef<DeleteDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  yes() {
    this.data = null;
    this.dialogRef.componentInstance.data = null;
    this.dialogRef.close();
  }
  no() {
    this.dialogRef.close();
  }
}
