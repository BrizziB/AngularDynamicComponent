import { Component, OnInit, OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { NavElement } from '../../non-component-leaves/navElement';
import { ContainerBoxDynamicComponent } from '../abstract-components/container-box-dynamic.component';
import { ContainerTabbedDynamicComponent } from '../abstract-components/container-tabbed-dynamic.component';


@Component({
  selector: 'app-dynamic-mat-tab',
  template: `
        <div id='tabbed-nav'>
          <ul>
            <li *ngFor="let tab of navElements"><a (click)='this.showTab(tab)' href='#'>{{tab.value}}</a></li>
          </ul>
          <ng-container #container></ng-container>
        </div>

  `,
  styleUrls: ['../../dynamical-component-styles/tabbedPanel.css']
})

/** questa specializzazione del container dinamico prevede una navbar che indicizza tutti
  * gli elementi di tipo NavElement che vengono passati alla pagina.
  * oltre a questo prevede di poter contenere una lista di generici container dinamici, che vengono visualizzati
  * in corrispondenza con i NavElement
*******************************************************************************************************************/
export class MaterialTabbedComponent extends ContainerTabbedDynamicComponent implements OnInit, OnDestroy {

  protected navElements: NavElement[];
  protected containedComponents: ContainerBoxDynamicComponent[];

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

  constructor() {
    super();
    this.navElements = [];
  }









}
