import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { LeafDynamicComponent } from './leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-combo-input',
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
  styleUrls: ['input.css']
})
export class ComboInputDynamicComponent extends LeafDynamicComponent {

  propertyName: string;
  values: string[] = [];

  selectedValue: string;

  constructor() {
      super();
  }





}
