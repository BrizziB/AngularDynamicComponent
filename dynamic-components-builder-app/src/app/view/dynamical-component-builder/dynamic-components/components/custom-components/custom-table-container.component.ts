import { Component, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { ContainerTableDynamicComponent } from '../abstract-components/container-table-dynamic.component';


@Component({
  selector: 'app-dynamic-table',
  template: `

      <div class='table-div'>
        <ng-container
              #container>
        </ng-container>
      </div>
  `,
  styleUrls: ['./styles/table.css']
})
export class CustomTableComponent extends ContainerTableDynamicComponent implements OnInit, OnDestroy {

  protected objectKeys = Object.keys;

  constructor() {
      super();
  }










}
