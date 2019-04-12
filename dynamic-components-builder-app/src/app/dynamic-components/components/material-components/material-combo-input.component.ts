import { Component } from '@angular/core';
import { InputComboDynamicComponent } from '../abstract-components/input-combo-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-comboinput',
  template: `
  <div class='combo-input-outer'>
    <div class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='value-div'>
      <select class='value-input'>
        <option selected></option>
        <option class='value-input' *ngFor="let entry of values" [value]="entry" > {{entry}} </option>
      </select>
    </div>
  </div>
  `,
  styleUrls: ['../../dynamical-component-styles/input.css']
})
export class MaterialComboInputComponent extends InputComboDynamicComponent {

  propertyName: string;
  values: string[] = [];


  selectedValue: string;

  constructor() {
      super();
  }





}
