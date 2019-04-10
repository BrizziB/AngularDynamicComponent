import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
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
  styleUrls: ['input.css']
})
export class StdInputDynamicComponent extends LeafDynamicComponent {

  propertyName: string;
  propertyValue: string|number;

  constructor() {
      super();
  }





}
