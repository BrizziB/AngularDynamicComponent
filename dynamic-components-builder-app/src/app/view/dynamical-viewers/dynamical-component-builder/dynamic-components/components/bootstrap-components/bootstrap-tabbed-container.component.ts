import { Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';

import { ContainerDynamicComponent } from '../abstract-components/_container-dynamic.component';

import { ContainerTabbedDynamicComponent } from '../abstract-components/container-tabbed-dynamic.component';
import { BootstrapBoxComponent } from './bootstrap-box-container.component';


@Component({
  selector: 'app-dynamic-boot-tab',
  template: `
        TODO

  `
})

/** questa specializzazione del container dinamico prevede una navbar che indicizza tutti
  * gli elementi di tipo NavElement che vengono passati alla pagina.
  * oltre a questo prevede di poter contenere una lista di generici container dinamici, che vengono visualizzati
  * in corrispondenza con i NavElement
*******************************************************************************************************************/
export class BootstrapTabbedComponent extends ContainerTabbedDynamicComponent implements OnInit, OnDestroy, AfterContentInit {


  protected tabClick($event) {
    console.log($event);
    this.showTab($event.index);
  }

  showTab(tab: number) {
    this.containedComponents.forEach( (comp: BootstrapBoxComponent) => {
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
  }



}
