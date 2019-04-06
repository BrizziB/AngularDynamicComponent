import { TabbedPanelDynamicComponent } from '../dynamic-components/tabbedPanel-dynamic.component';
import { PlainDivDynamicComponent } from '../dynamic-components/plainDiv-dynamic.component';
import { ContainerDynamicComponent } from '../dynamic-components/container-dynamic.component';
import { PDynamicComponent } from '../dynamic-components/p-dynamic.component';

import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { NavElemDynamicComponent } from '../dynamic-components/_prove/navElem-dynamic.component';
import { NavElement } from '../dynamic-components/leaves/navElement';
import { BoxDivDynamicComponent } from '../dynamic-components/boxDiv-dynamic.component';
import { OutputDynamicComponent } from '../dynamic-components/output-dynamic.component';


@Injectable({
    providedIn: 'root'
  })
export class PageBuilder{

  private NAVTAB_Factory: ComponentFactory<TabbedPanelDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(TabbedPanelDynamicComponent);

  private DIV_Factory: ComponentFactory<PlainDivDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PlainDivDynamicComponent);

  private BOX_Factory: ComponentFactory<BoxDivDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(BoxDivDynamicComponent);

  private OUTPUT_Factory: ComponentFactory<OutputDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(OutputDynamicComponent);

  private P_Factory: ComponentFactory<PDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PDynamicComponent);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public addPlainDiv(index: ContainerDynamicComponent): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = index.addDivChildComponent(this.DIV_Factory);
    return newDiv;
  }

  public addTabbedPanel(index: ContainerDynamicComponent): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (index.addDivChildComponent(this.NAVTAB_Factory));
    return newDiv;
  }

  public addBoxDiv(index: ContainerDynamicComponent): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (index.addDivChildComponent(this.BOX_Factory));
    return newDiv;
  }

  // qui c'è un bel po' di ripetizione del codice, si accorpa bene passando la factory

  public addTabsToPanel(index: TabbedPanelDynamicComponent, components: NavElement[]) {
    index.setNavElements(components);
  }

  public addTabToPanel(index: TabbedPanelDynamicComponent,
    component: NavElement) {
    index.addNavElement(component);
  }

  public addLeafChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    parentElem.addLeafChildComponent(this.P_Factory, value);
  }

  public addOutputChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    parentElem.addLeafChildComponent(this.OUTPUT_Factory, value);
  }

}
