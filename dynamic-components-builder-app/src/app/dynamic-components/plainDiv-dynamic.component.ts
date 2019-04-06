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
      <p *ngFor="let elem of objectKeys(context)">
        {{elem}}: {{context[elem]}}
      </p>
          <ng-template
              #container>
          </ng-template>
      </div>
  `,
})
export class PlainDivDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
  }










}
