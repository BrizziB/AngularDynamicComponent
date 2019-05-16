import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerPlainDynamicComponent } from '../abstract-components/container-plain-dynamic.component';
import { CompositeLeafDynamicComponent } from '../abstract-components/composite-leaf-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-comp-leaf',
  template: `
  <div class='outer-div'>
    <div class='property-div'>
      <span> {{propertyName}}: </span>
    </div>
    <div class='value-div'>
      <mat-form-field class="example-form-field">
        <input matInput class='value-input' type="text" placeholder="{{propertyName}}"
            [(ngModel)]="propertyValue" (ngModelChange)="this.notifyAll()">
         <button mat-button class="cleaning-btn"
           *ngIf="propertyValue" matSuffix mat-icon-button aria-label="Clear" (click)="propertyValue=''">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      <mat-form-field class="unit-form">
      <mat-select [(ngModel)]="selectedValue" class="unit-select" >
        <mat-option *ngFor="let entry of values" [value]="entry" (click)="this.notifyAll()"> <label> {{entry}} </label> </mat-option>
      </mat-select>
      </mat-form-field>
    </div>

  </div>
  `,
  styleUrls: ['./styles/compositeLeaf.css']
})
export class MaterialCompositeLeafComponent extends CompositeLeafDynamicComponent {



  constructor() {
      super();
  }







}
