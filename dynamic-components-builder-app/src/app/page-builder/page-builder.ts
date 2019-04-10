import { TabbedPanelDynamicComponent } from '../dynamic-components/tabbedPanel-dynamic.component';
import { PlainDivDynamicComponent } from '../dynamic-components/plainDiv-dynamic.component';
import { ContainerDynamicComponent } from '../dynamic-components/_container-dynamic.component';
import { PDynamicComponent } from '../dynamic-components/p-dynamic.component';

import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { NavElement } from '../dynamic-components/non-component-leaves/navElement';
import { BoxDivDynamicComponent } from '../dynamic-components/boxDiv-dynamic.component';
import { StdInputDynamicComponent } from '../dynamic-components/stdInput-dynamic.component';
import { TableDynamicComponent } from '../dynamic-components/table-dynamic.component';
import { ComboInputDynamicComponent } from '../dynamic-components/comboInput-dynamic.component';


@Injectable({
    providedIn: 'root'
  })
export class PageBuilder {

  private NAVTAB_Factory: ComponentFactory<TabbedPanelDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(TabbedPanelDynamicComponent);

  private DIV_Factory: ComponentFactory<PlainDivDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PlainDivDynamicComponent);

  private BOX_Factory: ComponentFactory<BoxDivDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(BoxDivDynamicComponent);

  private TABLE_Factory: ComponentFactory<TableDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(TableDynamicComponent);

  private STDINPUT_Factory: ComponentFactory<StdInputDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(StdInputDynamicComponent);

  private COMBOINPUT_Factory: ComponentFactory<ComboInputDynamicComponent> =
  this.componentFactoryResolver.resolveComponentFactory(ComboInputDynamicComponent);

  private P_Factory: ComponentFactory<PDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PDynamicComponent);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public addPlainDiv(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = index.addDivChildComponent(this.DIV_Factory, name);
    return newDiv;
  }

  public addTabbedPanel(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (index.addDivChildComponent(this.NAVTAB_Factory, name));
    return newDiv;
  }

  public addBox(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (index.addDivChildComponent(this.BOX_Factory, name));
    return newDiv;
  }

  public addTable(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (index.addDivChildComponent(this.TABLE_Factory, name));
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
    const newLeaf: PDynamicComponent =
      <PDynamicComponent>parentElem.addLeafChildComponent(this.P_Factory, value);
    return newLeaf;
  }

  public addStdInputChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    const newLeaf: StdInputDynamicComponent =
      <StdInputDynamicComponent>parentElem.addLeafChildComponent(this.STDINPUT_Factory, value);
    return newLeaf;
  }

  public addComboInputChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    const newLeaf: ComboInputDynamicComponent =
      <ComboInputDynamicComponent>parentElem.addLeafChildComponent(this.COMBOINPUT_Factory, value);
    return newLeaf;
  }

}
