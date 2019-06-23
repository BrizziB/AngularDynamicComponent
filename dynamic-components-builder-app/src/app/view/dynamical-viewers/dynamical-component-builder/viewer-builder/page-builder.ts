
import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { NavElement } from '../dynamic-components/non-component-leaves/navElement';
import { AbstractComponentFactory } from '../component-factory/abstract-component-factory';
import { MaterialComponentFactory } from '../component-factory/material-component-factory';
import { BootstrapComponentFactory } from '../component-factory/bootstrap-component-factory';
import { CustomComponentFactory } from '../component-factory/custom-component-factory';
import { ContainerDynamicComponent } from '../dynamic-components/components/abstract-components/_container-dynamic.component';
import { ContainerTabbedDynamicComponent } from '../dynamic-components/components/abstract-components/container-tabbed-dynamic.component';
import { InputPlainDynamicComponent } from '../dynamic-components/components/abstract-components/input-plain-dynamic.component';
import { InputComboDynamicComponent } from '../dynamic-components/components/abstract-components/input-combo-dynamic.component';
import { InputTextDynamicComponent } from '../dynamic-components/components/abstract-components/input-text-dynamic.component';
import { InputConditionalDynamicComponent } from '../dynamic-components/components/abstract-components/input-conditional-dynamic.component';
import { LeafDynamicComponent } from '../dynamic-components/components/abstract-components/_input-dynamic.component';
import { CompositeLeafDynamicComponent } from '../dynamic-components/components/abstract-components/composite-leaf-dynamic.component';


@Injectable({
    providedIn: 'root'
  })
export class PageBuilder {

  private componentFactory: AbstractComponentFactory;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  setFactory(factory: String) {
    switch (factory) {
      case 'material': {
        this.componentFactory = new MaterialComponentFactory(this.componentFactoryResolver);
        break;
      }

      case 'bootstrap': {
        this.componentFactory = new BootstrapComponentFactory(this.componentFactoryResolver);
        break;
      }

      default: {
        this.componentFactory = new CustomComponentFactory(this.componentFactoryResolver);
        break;
      }

    }
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


  public addTabsToPanel(index: ContainerTabbedDynamicComponent, components: NavElement[]) {
    index.setNavElements(components);
  }

  public addTabToPanel(index: ContainerTabbedDynamicComponent,
    component: NavElement) {
    index.addNavElement(component);
  }

  public addCompositeElem(parentElem: ContainerDynamicComponent,
      label: String, value: Number, selectValues: string[], selectedValue: string) {
    const tmp = parentElem.addLeafChildComponent(
        this.componentFactory.getCompositeComponentFactory(), null);
    const newLeaf: CompositeLeafDynamicComponent = <CompositeLeafDynamicComponent> tmp;
        newLeaf.propertyName = label;
        newLeaf.propertyValue = value;
        if (selectValues.length === 1 && selectValues[0] === '') {
          newLeaf.showUnit = false;
          console.log(newLeaf.getUUID());
        }
        newLeaf.values = selectValues;
        newLeaf.selectedValue =  selectedValue;
    return newLeaf;
  }

  public addStdInputChildToContainer(parentElem: ContainerDynamicComponent, elem: any, component: any) {
    const newLeaf: InputPlainDynamicComponent = <InputPlainDynamicComponent>parentElem.addLeafChildComponent(
        this.componentFactory.getPlainInputFactory(), elem);
        newLeaf.propertyName = elem.view.label;
        newLeaf.propertyValue = elem.fact.value;
    return newLeaf;
  }

  public addTextInputChildToContainer(parentElem: ContainerDynamicComponent, elem: any, component: any) {
    const newLeaf: InputTextDynamicComponent = <InputTextDynamicComponent>parentElem.addLeafChildComponent(
        this.componentFactory.getTextInputFactory(), elem);
        newLeaf.propertyName = elem.view.label;
        newLeaf.propertyValue = elem.fact.value;
    return newLeaf;
  }

  public addConditionalInputChildToContainer(parentElem: ContainerDynamicComponent, value: any, component: any) {
    const newLeaf: InputConditionalDynamicComponent = <InputConditionalDynamicComponent>parentElem.addLeafChildComponent(
        this.componentFactory.getConditionalInputFactory(), value);
        newLeaf.propertyName = component;
        newLeaf.propertyValue = value.fact.value;
        newLeaf.activatingValues = value.view.values;

        newLeaf.conditionController =
              <LeafDynamicComponent>parentElem.getContainedLeaves().filter(
                (comp: LeafDynamicComponent) => comp.propertyName === value.view.link)[0];

    return newLeaf;
  }


  public addComboInputChildToContainer(parentElem: ContainerDynamicComponent, elem: any, component: any) {
    const newLeaf: InputComboDynamicComponent = <InputComboDynamicComponent>parentElem.addLeafChildComponent(
      this.componentFactory.getComboInputFactory(), elem); // non si riesce a passare una classe? (...)
      newLeaf.propertyName = elem.view.label;
      newLeaf.values = elem.type.values;
      newLeaf.propertyValue = elem.fact.value;
  return newLeaf;
}


}
