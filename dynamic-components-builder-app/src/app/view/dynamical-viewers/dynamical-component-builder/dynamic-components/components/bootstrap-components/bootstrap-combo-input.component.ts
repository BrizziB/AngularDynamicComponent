import { Component } from '@angular/core';
import { InputComboDynamicComponent } from '../abstract-components/input-combo-dynamic.component';


@Component({
  selector: 'app-dynamic-boot-comboinput',
  template: `
  <div class='outer-div d-flex justify-content-start'>
    <div class='form-group d-flex justify-content-start'>
      <div *ngIf="!hideLabel" class='property-div'>
        <label> {{propertyName}}: </label>
      </div>
      <div class='value-div'>
        <select [(ngModel)]="propertyValue" class="form-control">
          <option *ngFor="let entry of values" [value]="entry" (click)="this.notifyAll()"> <label> {{entry}} </label> </option>
        </select>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./styles/input.css']

})
export class BootstrapComboInputComponent extends InputComboDynamicComponent {





  constructor() {
      super();
  }





}
