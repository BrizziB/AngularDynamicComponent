import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { LeafDynamicComponent } from './leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-std-input',
  template: `
    <span style='font-weight: bold'>
      {{propertyName}}:
    </span>
    <input type='text' [value]="propertyValue" >
    <br>
  `
})
export class StdInputDynamicComponent extends LeafDynamicComponent {

  propertyName: string;
  propertyValue: string|number;

  constructor() {
      super();
  }





}
