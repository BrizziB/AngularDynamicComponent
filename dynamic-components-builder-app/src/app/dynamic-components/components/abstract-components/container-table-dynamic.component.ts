import { ContainerDynamicComponent } from './_container-dynamic.component';
import { Component, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-dynamic-table',
  template: `no template
  `
})
export class ContainerTableDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor() {
      super();
  }










}
