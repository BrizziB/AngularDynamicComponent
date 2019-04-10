import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';


@Component({
  selector: 'app-dynamic-plain-div',
  template: `
      <div class='plain-div'>

          <ng-container
              #container>
          </ng-container>
      </div>
  `,
})
export class PlainDivDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
  }










}
