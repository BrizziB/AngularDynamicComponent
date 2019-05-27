import { Component } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';
import { InputConditionalDynamicComponent } from '../abstract-components/input-conditional-dynamic.component';


@Component({
  selector: 'app-dynamic-cond-input',
  template: `<div class='std-input-outer'>
    <div [hidden] = "isHidden" class='property-div'>
      <span>
        {{propertyName}}:
      </span>
    </div>
    <div [hidden] = "isHidden" class='value-div'>
      <input
        class='value-input' type='text'
        (input)="this.notifyAll()" [(ngModel)]="propertyValue">
    </div>
  </div>
  `,
  styleUrls: ['./styles/input.css']
})
export  class CustomConditionalInputComponent extends InputConditionalDynamicComponent {

  isHidden: boolean;

  constructor() {
      super();
  }





}
