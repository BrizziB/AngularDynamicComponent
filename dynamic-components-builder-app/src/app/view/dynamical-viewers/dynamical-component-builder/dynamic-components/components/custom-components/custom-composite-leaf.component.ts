import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerPlainDynamicComponent } from '../abstract-components/container-plain-dynamic.component';
import { CompositeLeafDynamicComponent } from '../abstract-components/composite-leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-cust-comp-leaf',
  template: `
      <div class='plain-div'>

      </div>
  `,
})
export class  CustomCompositeLeafComponent extends CompositeLeafDynamicComponent  {


  constructor() {
      super();
  }

}
