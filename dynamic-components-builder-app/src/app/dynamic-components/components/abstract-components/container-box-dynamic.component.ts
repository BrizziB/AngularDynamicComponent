import { ContainerDynamicComponent } from './_container-dynamic.component';
import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'app-dynamic-box-div', // *ngIf='getShowBox()'
  template: `no template
  `,
})
export abstract class ContainerBoxDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;
  public hidden = false;

  public setHidden(hidden: boolean) {
    this.hidden = hidden;
  }

  public getHidden(): boolean {
    return this.hidden;
  }

  constructor() {
      super();
      this.context = [];
  }

  ngOnInit() {
    this.hidden = true;
  }










}
