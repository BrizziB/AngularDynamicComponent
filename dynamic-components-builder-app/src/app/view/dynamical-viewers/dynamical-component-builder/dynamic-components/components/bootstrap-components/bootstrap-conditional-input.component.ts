import {  Component, OnInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';
import { InputConditionalDynamicComponent } from '../abstract-components/input-conditional-dynamic.component';
import { LeafDynamicComponent } from '../abstract-components/_input-dynamic.component';



@Component({
  selector: 'app-dynamic-boot-cond-input',
  template: `
    <div  class='outer-div d-flex justify-content-start'>
      <div [hidden] = "isHidden" class='property-div'>
        <label> {{propertyName}}: </label>
      </div>
      <div [hidden] = "isHidden" class='value-div'>
        <div class="form-group">
          <input class='value-input form-control' type="text" placeholder="{{propertyName}}"
            (input)="this.notifyAll()" [(ngModel)]="propertyValue" >

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./styles/input.css']
})
export class BootstrapConditionalInputComponent extends InputConditionalDynamicComponent implements OnInit {

  isHidden: boolean;



  constructor() {
      super();
  }


/*   <button mat-button class="cleaning-btn"
  *ngIf="propertyValue" matSuffix mat-icon-button aria-label="Clear" (click)="propertyValue=''">
 <mat-icon>close</mat-icon>
</button> */



}
