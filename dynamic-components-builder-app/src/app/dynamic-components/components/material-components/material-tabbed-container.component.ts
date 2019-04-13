import { Component, OnInit, OnDestroy, ViewContainerRef, ViewChild,
  ViewChildren, QueryList, ComponentRef, ComponentFactory, AfterViewInit, AfterContentInit} from '@angular/core';

import { ContainerDynamicComponent } from '../abstract-components/_container-dynamic.component';

import { NavElement } from '../../non-component-leaves/navElement';
import { ContainerBoxDynamicComponent } from '../abstract-components/container-box-dynamic.component';
import { ContainerTabbedDynamicComponent } from '../abstract-components/container-tabbed-dynamic.component';
import { container } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-dynamic-mat-tab',
  template: `
        <div id='tabbed-nav'>
          <mat-tab-group (selectedTabChange)="tabClick($event)">
            <mat-tab *ngFor="let tab of navElements" label ="{{tab.value}}">
            </mat-tab>
          </mat-tab-group>
          <ng-container #container> </ng-container>
        </div>

  `,
  styleUrls: ['./styles/tab.css']
})

/** questa specializzazione del container dinamico prevede una navbar che indicizza tutti
  * gli elementi di tipo NavElement che vengono passati alla pagina.
  * oltre a questo prevede di poter contenere una lista di generici container dinamici, che vengono visualizzati
  * in corrispondenza con i NavElement
*******************************************************************************************************************/
export class MaterialTabbedComponent extends ContainerTabbedDynamicComponent implements OnInit, OnDestroy, AfterContentInit {

  protected navElements: NavElement[];
  protected containedComponents: ContainerBoxDynamicComponent[];
  protected containers: ViewContainerRef[];
  private counter;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  protected tabClick($event) {
    console.log($event);
    this.showTab($event.index);
  }

  showTab(tab: number) {
    this.containedComponents.forEach(comp => {
      if (comp.context.id === tab.toString()) {
          comp.setHidden(false);
      } else {
        comp.setHidden(true);
      }
    });
  }

  ngAfterContentInit(): void {
    this.showTab(0);
  }

  constructor() {
    super();
    this.counter = 0;
  }



//   (click)="this.showTab(tab)" *ngFor="let tab of navElements" label ="{{tab.value}}"







}
