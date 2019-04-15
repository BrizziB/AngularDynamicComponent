import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContainerPlainDynamicComponent } from './dynamic-components/components/abstract-components/container-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-base',
  template: `
      <div class='outer-plain-div'>
          <ng-container
              #container>
          </ng-container>
      </div>
  `,
})
export class BaseComponent extends ContainerPlainDynamicComponent implements OnInit, OnDestroy {

  constructor() {
      super();
  }










}
