import { Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerBoxDynamicComponent } from '../abstract-components/container-box-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-box', // *ngIf='getShowBox()'
  template: `
      <fieldset [hidden] = "isHidden"  class='mat-box-div'
      style='align-content: center;'>
          <legend>{{legend}}</legend>
          <ng-container #container></ng-container>
      </fieldset>


  `,
})
export class MaterialBoxComponent extends ContainerBoxDynamicComponent implements OnInit, OnDestroy {


  constructor() {
      super();
  }
  protected objectKeys = Object.keys;
  protected isHidden = false;


  public setHidden(hidden: boolean) {
    this.isHidden = hidden;
  }

  public getHidden(): boolean {
    return this.isHidden;
  }

  ngOnInit() {
  }


}
