import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-dynamic-table',
  template: `

      <div class='table-div'>
        <ng-container
              #container>
        </ng-container>
      </div>
  `,
  styleUrls: ['./dynamical-component-styles/table.css']
})
export class TableDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
  }










}
