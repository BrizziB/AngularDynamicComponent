import { Component } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-std-input',
  template: `<div class='std-input-outer'>
    <div class='property-div'>
      <span>
        {{propertyName}}:
      </span>
    </div>
    <div class='value-div'>
      <input class='value-input' type='text' [(ngModel)]="propertyValue"
      (ngModelChange)="this.notifyAll()">
    </div>
  </div>
  `,
  styleUrls: ['./styles/input.css']
})
export  class CustomPlainInputComponent extends InputPlainDynamicComponent {


  constructor() {
      super();
  }





}
