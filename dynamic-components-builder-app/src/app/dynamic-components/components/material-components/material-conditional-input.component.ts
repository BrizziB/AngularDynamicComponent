import {  Component, OnInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';
import { InputConditionalDynamicComponent } from '../abstract-components/input-conditional-dynamic.component';
import { LeafDynamicComponent } from '../abstract-components/_input-dynamic.component';



@Component({
  selector: 'app-dynamic-mat-cond-input',
  template: `
    <div  class='outer-div'>
      <div [hidden] = "isHidden" class='property-div'>
        <span> {{propertyName}}: </span>
      </div>
      <div [hidden] = "isHidden" class='value-div'>
        <mat-form-field class="example-form-field">
          <input matInput class='value-input' type="text" placeholder="{{propertyName}}"
            (input)="this.notifyAll()" [(ngModel)]="propertyValue" >

        </mat-form-field>
      </div>
    </div>
  `,
  styleUrls: ['./styles/input.css']
})
export class MaterialConditionalInputComponent extends InputConditionalDynamicComponent implements OnInit {

  isHidden: boolean;



  constructor() {
      super();
  }


/*   <button mat-button class="cleaning-btn"
  *ngIf="propertyValue" matSuffix mat-icon-button aria-label="Clear" (click)="propertyValue=''">
 <mat-icon>close</mat-icon>
</button> */



}
