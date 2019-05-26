import { Component } from '@angular/core';
import { InputComboDynamicComponent } from '../abstract-components/input-combo-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-comboinput',
  template: `
  <div class='outer-div'>
    <div *ngIf="!hideLabel" class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='value-div'>
      <mat-form-field>
      <mat-label *ngIf="!hideLabel">{{propertyName}}</mat-label>
      <mat-select [(ngModel)]="propertyValue" >
        <mat-option *ngFor="let entry of values" [value]="entry" (click)="this.notifyAll()"> <label> {{entry}} </label> </mat-option>
      </mat-select>
      </mat-form-field>
    </div>
  </div>
  `,
  styleUrls: ['./styles/input.css']

})
export class MaterialComboInputComponent extends InputComboDynamicComponent {





  constructor() {
      super();
  }





}
