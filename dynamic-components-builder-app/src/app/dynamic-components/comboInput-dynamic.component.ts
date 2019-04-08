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
    <span style='font-weight: bold'> {{propertyName}}: </span>
    <select>
      <option selected></option>
      <option *ngFor="let entry of values" [value]="entry" > {{entry}} </option>
    </select>
    <br>
  `
})
export class ComboInputDynamicComponent extends LeafDynamicComponent {

  propertyName: string;
  values: string[] = [];

  selectedValue: string;

  constructor() {
      super();
  }





}
