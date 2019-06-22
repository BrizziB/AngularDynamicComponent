import {  Component } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-boot-txtinput',
  template: `
  <div class='outer-div d-flex justify-content-start'>
    <div class='property-div'>
      <label> {{propertyName}}: </label>
    </div>
    <div class='text-div'>
      <div class="form-field" floatLabel="never">
        <textarea class='text-input' type="text" placeholder="{{propertyName}}"
          [(ngModel)]="propertyValue"  (input)="this.notifyAll()">
              {{propertyValue}}
        </textarea>
      </div>
    </div>

  </div>

  `,
  styleUrls: ['./styles/input.css']
})
export class BootstrapTextInputComponent extends InputPlainDynamicComponent {

  constructor() {
      super();
  }





}
