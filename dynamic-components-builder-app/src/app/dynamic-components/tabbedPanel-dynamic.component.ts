import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { NavElemDynamicComponent } from './_prove/navElem-dynamic.component';
import { LeafDynamicComponent } from './leaf-dynamic.component';
import { NavElement } from './leaves/navElement';


@Component({
  selector: 'app-dynamic-tabbed-panel',
  template: `
        <div id='tabbed-nav'>
          <ul>
            <li *ngFor="let tab of navElements"><a (click)='this.print(tab)' href='#'>{{tab.value}}</a></li>
          </ul>
        </div>
        <ng-template #container></ng-template>
  `,
  styleUrls: ['./tabbedPanel-dynamic.component.css']
})
export class TabbedPanelDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected navElements: NavElement[];

  print(tab: any) {
    console.log('hai cliccato la tab " ' + tab.value + ' "');
  }

  public setNavElements(elems: NavElement[]) {
    this.navElements = elems;
  }

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
    this.navElements = [];
  }









}
