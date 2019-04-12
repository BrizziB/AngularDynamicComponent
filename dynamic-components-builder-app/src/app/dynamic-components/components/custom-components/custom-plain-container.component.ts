import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerPlainDynamicComponent } from '../abstract-components/container-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-custom-plain',
  template: `
      <div class='plain-div'>

          <ng-container
              #container>
          </ng-container>
      </div>
  `,
})
export  class CustomPlainComponent extends ContainerPlainDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor() {
      super();
  }










}
