import { Component } from '@angular/core';
import { LeafDynamicComponent } from './_input-dynamic.component';


@Component({
  selector: 'app-dynamic-combo-input',
  template: `no template
  `
})
export abstract class InputComboDynamicComponent extends LeafDynamicComponent {

  public values: string[] = [];
  public hideLabel: boolean;


  constructor() {
      super();
  }





}
