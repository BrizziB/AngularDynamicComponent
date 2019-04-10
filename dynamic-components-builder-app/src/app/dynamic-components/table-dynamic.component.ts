import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory, AfterViewInit
} from '@angular/core';
import { DynamicComponent } from './dynamic.component';


@Component({
  selector: 'app-dynamic-table',
  template: `

      <div class='table-div'>
        <ng-container
              #container>
        </ng-container>
      </div>
  `,
  styleUrls: ['table-dynamic.component.css']
})
export class TableDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy, AfterViewInit {

  protected objectKeys = Object.keys;

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
  }

  ngAfterViewInit() {

    //forse da qui?
}








}
