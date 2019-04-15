import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { InputComboDynamicComponent } from '../abstract-components/input-combo-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-comboinput',
  template: `
  <div class='outer-div'>
    <div class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='value-div'>
      <mat-form-field>
      <mat-label>{{propertyName}}</mat-label>
      <mat-select [(ngModel)]="selectedValue" > /* mostra l'eventuale valore selezionato */
        <mat-option *ngFor="let entry of values" [value]="entry"> <label> {{entry}} </label> </mat-option>
      </mat-select>
      </mat-form-field>
    </div>
  </div>
  `,
  styleUrls: ['./styles/input.css']

})
export class MaterialComboInputComponent extends InputComboDynamicComponent {


  constructor() {
      super();
  }





}
