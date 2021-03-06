import { Component, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { ContainerTableDynamicComponent } from '../abstract-components/container-table-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-table',
  template: `
    <div class="mat-table-div">
        <ng-container
          #container>
        </ng-container>
    </div>
  `,
  styleUrls: ['./styles/table.css']
})
export class MaterialTableComponent extends ContainerTableDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor() {
      super();
  }










}
