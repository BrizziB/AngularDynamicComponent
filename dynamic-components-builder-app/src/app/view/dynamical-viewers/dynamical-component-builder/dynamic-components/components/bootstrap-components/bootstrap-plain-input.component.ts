import {  Component } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-boot-stdinput',
  template: `
  <div class='outer-div d-flex justify-content-start'>
    <div class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='value-div'>
      <div class="form-group example-form-field">
        <input matInput class='value-input form-control' type="text" placeholder="{{propertyName}}"
            [(ngModel)]="propertyValue" (ngModelChange)="this.notifyAll()">

      </div>
    </div>

  </div>
  `,
  styleUrls: ['./styles/input.css']
})
export class BootstrapPlainInputComponent extends InputPlainDynamicComponent {



  constructor() {
      super();
  }





}
