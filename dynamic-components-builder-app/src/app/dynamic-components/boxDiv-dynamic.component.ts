import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';


@Component({
  selector: 'app-dynamic-box-div', // *ngIf='getShowBox()'
  template: `
      <div [hidden]='getHidden()' class='content-box-div'
      style='
            align-content: center;'>
          <ng-container #container></ng-container>
      </div>


  `,
})
export class BoxDivDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;
  public hidden = false;

  public setHidden(hidden: boolean) {
    this.hidden = hidden;
  }

  public getHidden(): boolean {
    return this.hidden;
  }

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
      this.context = [];
  }

  ngOnInit() {
    this.hidden = true;
  }










}
