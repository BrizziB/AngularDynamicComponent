import { ContainerDynamicComponent } from './container-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { NavElemDynamicComponent } from './_prove/navElem-dynamic.component';
import { LeafDynamicComponent } from './leaf-dynamic.component';
import { NavElement } from './leaves/navElement';
import { BoxDivDynamicComponent } from './boxDiv-dynamic.component';


@Component({
  selector: 'app-dynamic-tabbed-panel',
  template: `
        <div id='tabbed-nav'>
          <ul>
            <li *ngFor="let tab of navElements"><a (click)='this.showTab(tab)' href='#'>{{tab.value}}</a></li>
          </ul>
          <ng-template #container></ng-template>
        </div>

  `,
  styleUrls: ['./tabbedPanel-dynamic.component.css']
})

/** questa specializzazione del container dinamico prevede una navbar che indicizza tutti
  * gli elementi di tipo NavElement che vengono passati alla pagina.
  * oltre a questo prevede di poter contenere una lista di generici container dinamici, che vengono visualizzati
  * in corrispondenza con i NavElement
*******************************************************************************************************************/
export class TabbedPanelDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

  protected navElements: NavElement[];
  protected containedComponents: BoxDivDynamicComponent[];

  showTab(tab: any) {
    this.containedComponents.forEach(container => {
      if (container.context.id === tab.id) {
          container.setHidden(false);
      } else {
        container.setHidden(true);
      }
    });
  }

  public setNavElements(elems: NavElement[]) {
    this.navElements = elems;
  }

  public addNavElement(elem: NavElement) {
    this.navElements.push(elem);
  }

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
    this.navElements = [];
  }









}
