import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { CompositeLeafDynamicComponent } from '../abstract-components/composite-leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-boot-comp-leaf',
  template: `
  <div class='outer-div d-flex justify-content-start'>
    <div class='property-div'>
      <label> {{propertyName}}: </label>
    </div>
    <div class='value-div d-flex justify-content-start'>
        <input class='form-control' type="text" placeholder="{{propertyName}}"
            [(ngModel)]="propertyValue" (ngModelChange)="this.notifyAll()">
      <div *ngIf="showUnit" class="unit-form form-group">
      <select [(ngModel)]="selectedValue" class="form-control" >
        <option *ngFor="let entry of values" [value]="entry" (click)="this.notifyAll()"> <label> {{entry}} </label> </option>
      </select>
      </div>
    </div>

  </div>
  `,
  styleUrls: ['./styles/input.css']
})
export class BootstrapCompositeLeafComponent extends CompositeLeafDynamicComponent{



  constructor() {
      super();
  }







}
