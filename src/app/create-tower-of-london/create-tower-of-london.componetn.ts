import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ctol } from './ctol/create-tower-of-london-min';

@Component({
    selector: 'app-create-tower-of-london',
    templateUrl: 'create-tower-of-london.component.html',
    styleUrls: ['create-tower-of-london.component.css']
  })

  export class CreateTowerOfLondonComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    

    public constructor(private _formBuilder: FormBuilder) { 
      
    }
    
      ngOnInit() {
        //Ctol.initFunction();
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
          thirdCtrl: ['', Validators.required]
        });
        
      }
      runScript(): void {
        const superObj = {
          arrStart: "",
          arrFinish: "",
          numMoves: 0
      }
        Ctol.initFunction(superObj);
      }

  }