import { Component } from '@angular/core';
import { LeafDynamicComponent } from './_input-dynamic.component';


@Component({
  selector: 'app-dynamic-std-input',
  template: `no template
  `
})
export abstract class InputTextDynamicComponent extends LeafDynamicComponent {

  propertyName: string;
  propertyValue: String;

  constructor() {
      super();
  }





}
