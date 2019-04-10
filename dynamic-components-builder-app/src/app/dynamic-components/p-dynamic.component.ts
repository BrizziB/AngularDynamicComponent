import { DynamicComponent } from './__dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { LeafDynamicComponent } from './_leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-p',
  template: `<p>{{context}}</p>`
})
export class PDynamicComponent extends LeafDynamicComponent {

  constructor() {
      super();
  }





}
