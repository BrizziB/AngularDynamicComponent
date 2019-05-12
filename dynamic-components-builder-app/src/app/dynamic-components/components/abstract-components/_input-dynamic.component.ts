import { DynamicComponent } from './__base-dynamic.component';
import { OnChanges, SimpleChanges, Input } from '@angular/core';
import { InputConditionalDynamicComponent } from './input-conditional-dynamic.component';


export abstract class LeafDynamicComponent extends DynamicComponent{

  propertyName: any;
  propertyValue: any;

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
