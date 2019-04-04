import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';


@Component({
  selector: 'app-dynamic-p',
  template: `non dovresti vedermi `
})
export abstract class LeafDynamicComponent extends DynamicComponent {

  constructor() {
      super();
  }





}
