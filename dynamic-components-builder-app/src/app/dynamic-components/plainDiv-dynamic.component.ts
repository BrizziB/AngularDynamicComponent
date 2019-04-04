import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';


@Component({
  selector: 'app-dynamic-plain-div',
  template: `
      <div class='content-plain-div'>
          <ng-template #container></ng-template>
      </div>
  `,
})
export class PlainDivDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
  }










}
