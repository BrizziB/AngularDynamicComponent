import {
  Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { ContainerPlainDynamicComponent } from '../abstract-components/container-plain-dynamic.component';


@Component({
  selector: 'app-dynamic-boot-plain',
  template: `
      <div class='mat-plain-div'>
          <ng-container
              #container>
          </ng-container>
      </div>
  `,
  styleUrls: ['./styles/table.css']
})
export class BootstrapPlainComponent extends ContainerPlainDynamicComponent implements OnInit, OnDestroy {


  constructor() {
      super();
  }










}
