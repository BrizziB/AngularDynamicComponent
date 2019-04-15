
import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { NavElement } from '../dynamic-components/non-component-leaves/navElement';
import { AbstractComponentFactory } from '../component-factory/abstract-component-factory';
import { MaterialComponentFactory } from '../component-factory/material-component-factory';
import { CustomComponentFactory } from '../component-factory/custom-component-factory';
import { ContainerDynamicComponent } from '../dynamic-components/components/abstract-components/_container-dynamic.component';
import { ContainerTabbedDynamicComponent } from '../dynamic-components/components/abstract-components/container-tabbed-dynamic.component';
import { InputPlainDynamicComponent } from '../dynamic-components/components/abstract-components/input-plain-dynamic.component';
import { InputComboDynamicComponent } from '../dynamic-components/components/abstract-components/input-combo-dynamic.component';
import { InputTextDynamicComponent } from '../dynamic-components/components/abstract-components/input-text-dynamic.component';


@Injectable({
    providedIn: 'root'
  })
export class PageBuilder {

  private componentFactory: AbstractComponentFactory;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactory = new MaterialComponentFactory(componentFactoryResolver);
    // this.componentFactory = new CustomComponentFactory(componentFactoryResolver);
   }

  public addPlainDiv(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = index.addDivChildComponent(
        this.componentFactory.getPlainContainerFactory(), name);
    return newDiv;
  }

  public addTabbedPanel(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (
      index.addDivChildComponent(this.componentFactory.getTabbedContainerFactory(), name));
    return newDiv;
  }

  public addBox(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (
      index.addDivChildComponent(this.componentFactory.getBoxContainerFactory(), name));
    return newDiv;
  }

  public addTable(index: ContainerDynamicComponent, name: string): ContainerDynamicComponent {
    const newDiv: ContainerDynamicComponent = (
      index.addDivChildComponent(this.componentFactory.getTableContainerFactory(), name));
    return newDiv;
  }

  // qui c'è un bel po' di ripetizione del codice, si accorpa bene passando la factory

  public addTabsToPanel(index: ContainerTabbedDynamicComponent, components: NavElement[]) {
    index.setNavElements(components);
  }

  public addTabToPanel(index: ContainerTabbedDynamicComponent,
    component: NavElement) {
    index.addNavElement(component);
  }

  public addLeafChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    const newLeaf: InputPlainDynamicComponent = <InputPlainDynamicComponent>parentElem.addLeafChildComponent(
        this.componentFactory.getPlainInputFactory(), value);
    return newLeaf;
  }

  public addStdInputChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    const newLeaf: InputPlainDynamicComponent = <InputPlainDynamicComponent>parentElem.addLeafChildComponent(
        this.componentFactory.getPlainInputFactory(), value);
    return newLeaf;
  }

  public addTextInputChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    const newLeaf: InputTextDynamicComponent = <InputTextDynamicComponent>parentElem.addLeafChildComponent(
        this.componentFactory.getTextInputFactory(), value);
    return newLeaf;
  }


  public addComboInputChildToContainer(parentElem: ContainerDynamicComponent, value: string|number) {
    const newLeaf: InputComboDynamicComponent = <InputComboDynamicComponent>parentElem.addLeafChildComponent(
      this.componentFactory.getComboInputFactory(), value);
  return newLeaf;
}


}
