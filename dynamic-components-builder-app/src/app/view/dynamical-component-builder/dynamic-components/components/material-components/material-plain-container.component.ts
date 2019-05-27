import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerPlainDynamicComponent } from '../abstract-components/container-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-plain',
  template: `
      <div class='mat-plain-div'>
          <ng-container
              #container>
          </ng-container>
      </div>
  `,
  styleUrls: null
})
export class MaterialPlainComponent extends ContainerPlainDynamicComponent implements OnInit, OnDestroy {


  constructor() {
      super();
  }










}
