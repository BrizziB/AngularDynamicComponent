import { LeafDynamicComponent } from './_input-dynamic.component';
import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'app-dynamic-comp-elem',
  template: `no template
  `,
})
export abstract class CompositeLeafDynamicComponent extends LeafDynamicComponent{

  public objectKeys = Object.keys;
  public values: string[] = [];
  public selectedValue: string;
  public showUnit = true;

  constructor() {
      super();
  }










}
