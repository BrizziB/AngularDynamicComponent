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
    <div class='text-div'>
      <textarea class='value-input' type='text'
        [(ngModel)]="propertyValue" (input)="this.notifyAll()">
      </textarea>
    </div>
  </div>
  `,
  styleUrls: ['./styles/input.css']
})
export  class CustomTextInputComponent extends InputPlainDynamicComponent {

  propertyName: string;
  propertyValue: string|number;

  constructor() {
      super();
  }





}
