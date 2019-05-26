import { DynamicComponent } from './__base-dynamic.component';
import {Component,  ViewEncapsulation } from '@angular/core';
import { InputConditionalDynamicComponent } from './input-conditional-dynamic.component';

@Component({
  selector: 'app-dynamic-leaf',
  template: `no-template`,
  encapsulation: ViewEncapsulation.None
})
export abstract class LeafDynamicComponent extends DynamicComponent{



  public propertyName: any;
  public propertyValue: any;



  private conditionedComponents: InputConditionalDynamicComponent[];

  public subscribe(subscriber: InputConditionalDynamicComponent) {
    this.conditionedComponents.push(subscriber);
  }

  public notifyAll(): void {
    this.conditionedComponents.forEach((element: InputConditionalDynamicComponent) => {
      element.conditionValue = this.propertyValue;
      element.checkIfHidden();
    });
  }


  constructor() {
    super();
    this.conditionedComponents = [];
  }

}
