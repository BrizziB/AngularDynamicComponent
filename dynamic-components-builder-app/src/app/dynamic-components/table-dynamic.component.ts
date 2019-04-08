import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { DynamicComponent } from './dynamic.component';


@Component({
  selector: 'app-dynamic-table',
  template: `

      <div class='table-div'>
        <ng-template
              #container>
        </ng-template>
      </div>
  `,
})
export class TableDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
  }










}
