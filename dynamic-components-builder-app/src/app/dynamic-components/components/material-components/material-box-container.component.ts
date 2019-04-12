import { Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerBoxDynamicComponent } from '../abstract-components/container-box-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-box', // *ngIf='getShowBox()'
  template: `
      <div [hidden]='getHidden()' class='content-box-div'
      style='
            align-content: center;'>
          <ng-container #container></ng-container>
      </div>


  `,
})
export class MaterialBoxComponent extends ContainerBoxDynamicComponent implements OnInit, OnDestroy {

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
