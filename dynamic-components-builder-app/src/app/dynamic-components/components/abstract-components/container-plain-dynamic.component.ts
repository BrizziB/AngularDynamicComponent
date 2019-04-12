import { ContainerDynamicComponent } from './_container-dynamic.component';
import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'app-dynamic-plain-div',
  template: `no template
  `,
})
export abstract class ContainerPlainDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor() {
      super();
  }










}
