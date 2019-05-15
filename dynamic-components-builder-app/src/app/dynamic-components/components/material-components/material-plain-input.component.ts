import {  Component } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-stdinput',
  template: `
  <div class='outer-div'>
    <div class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='value-div'>
      <mat-form-field class="example-form-field">
        <input matInput class='value-input' type="text" placeholder="{{propertyName}}"
            [(ngModel)]="propertyValue" (ngModelChange)="this.notifyAll()">
        /* <button mat-button class="cleaning-btn"
           *ngIf="propertyValue" matSuffix mat-icon-button aria-label="Clear" (click)="propertyValue=''">
          <mat-icon>close</mat-icon>
        </button> */
      </mat-form-field>
    </div>

  </div>
  `,
  styleUrls: ['./styles/input.css']
})
export class MaterialPlainInputComponent extends InputPlainDynamicComponent {



  constructor() {
      super();
  }





}
