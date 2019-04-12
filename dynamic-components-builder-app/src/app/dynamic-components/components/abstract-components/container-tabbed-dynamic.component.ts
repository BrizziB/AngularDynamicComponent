import { ContainerDynamicComponent } from './_container-dynamic.component';
import { Component, OnInit, OnDestroy, ComponentFactoryResolver
} from '@angular/core';
import { NavElement } from '../../non-component-leaves/navElement';
import { ContainerBoxDynamicComponent } from './container-box-dynamic.component';


@Component({
  selector: 'app-dynamic-tabbed-panel',
  template: `no template

  `,
})

/** questa specializzazione del container dinamico prevede una navbar che indicizza tutti
  * gli elementi di tipo NavElement che vengono passati alla pagina.
  * oltre a questo prevede di poter contenere una lista di generici container dinamici, che vengono visualizzati
  * in corrispondenza con i NavElement
*******************************************************************************************************************/
export abstract class ContainerTabbedDynamicComponent extends ContainerDynamicComponent implements OnInit, OnDestroy {

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
