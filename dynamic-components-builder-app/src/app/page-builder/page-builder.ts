import { TabbedPanelDynamicComponent } from '../dynamic-components/tabbedPanel-dynamic.component';
import { PlainDivDynamicComponent } from '../dynamic-components/plainDiv-dynamic.component';
import { ContainerDynamicComponent } from '../dynamic-components/container-dynamic.component';
import { PDynamicComponent } from '../dynamic-components/p-dynamic.component';

import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { NavElemDynamicComponent } from '../dynamic-components/_prove/navElem-dynamic.component';
import { NavElement } from '../dynamic-components/leaves/navElement';


@Injectable({
    providedIn: 'root'
  })
export class PageBuilder{

  private NAVTAB_Factory: ComponentFactory<TabbedPanelDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(TabbedPanelDynamicComponent);

  private DIV_Factory: ComponentFactory<PlainDivDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PlainDivDynamicComponent);

  private NAVELEM_Factory: ComponentFactory<NavElemDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(NavElemDynamicComponent);

  private P_Factory: ComponentFactory<PDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PDynamicComponent);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public addPlainDiv(index: ContainerDynamicComponent): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = index.addDivChildComponent(this.DIV_Factory);
    return newDiv;
  }

  public addTabbedPanel(index: ContainerDynamicComponent) {
    const newDiv: ContainerDynamicComponent = (index.addDivChildComponent(this.NAVTAB_Factory));
    return newDiv;
  }

  public addTabsToPanel(index: TabbedPanelDynamicComponent, components: NavElement[]) {
    index.setNavElements(components);

  }

  public addLeafChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    parentElem.addLeafChildComponent(this.P_Factory, value);
  }

}
