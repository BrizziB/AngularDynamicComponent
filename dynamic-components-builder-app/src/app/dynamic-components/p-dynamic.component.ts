import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';


@Component({
  selector: 'app-dynamic-p',
  template: `<p>{{context}}</p>`
})
export class PDynamicComponent extends DynamicComponent {

  constructor() {
      super();
  }





}
