import {  Component } from '@angular/core';
import { InputPlainDynamicComponent } from '../abstract-components/input-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-txtinput',
  template: `
  <div class='outer-div'>
    <div class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='text-div'>
      <mat-form-field class="form-field" floatLabel="never">
        <textarea matInput class='text-input' type="text" placeholder="{{propertyName}}"
          [(ngModel)]="propertyValue"  (input)="this.notifyAll()">
              {{propertyValue}}
        </textarea>
      </mat-form-field>
    </div>

  </div>

  `,
  styleUrls: ['./styles/input.css']
})
export class MaterialTextInputComponent extends InputPlainDynamicComponent {

  constructor() {
      super();
  }





}
