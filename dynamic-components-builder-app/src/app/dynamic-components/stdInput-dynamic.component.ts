import { DynamicComponent } from './dynamic.component';
import {
  Component } from '@angular/core';
import { LeafDynamicComponent } from './leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-std-input',
  template: `<div class='std-input-outer'>
    <div class='property-div'>
      <span>
        {{propertyName}}:
      </span>
    </div>
    <div class='value-div'>
      <input class='value-input' type='text' [value]="propertyValue">
    </div>
  </div>
  `,
  styleUrls: ['./dynamical-component-styles/input.css']
})
export class StdInputDynamicComponent extends LeafDynamicComponent {

  propertyName: string;
  propertyValue: string|number;

  constructor() {
      super();
  }





}
