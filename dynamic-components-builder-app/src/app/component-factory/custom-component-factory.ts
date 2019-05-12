import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory, Component} from '@angular/core';
import { AbstractComponentFactory } from './abstract-component-factory';
import { CustomPlainComponent } from '../dynamic-components/components/custom-components/custom-plain-container.component';
import { CustomBoxComponent } from '../dynamic-components/components/custom-components/custom-box-container.component';
import { CustomTabbedComponent } from '../dynamic-components/components/custom-components/custom-tabbed-container.component';
import { CustomTableComponent } from '../dynamic-components/components/custom-components/custom-table-container.component';
import { CustomComboInputComponent } from '../dynamic-components/components/custom-components/custom-combo-input.component';
import { CustomPlainInputComponent } from '../dynamic-components/components/custom-components/custom-plain-input.component';
import { CustomTextInputComponent } from '../dynamic-components/components/custom-components/custom-text-input.component';
import { CustomConditionalInputComponent } from '../dynamic-components/components/custom-components/custom-conditional-input.component';


export class CustomComponentFactory extends AbstractComponentFactory {

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
    }

    public  getPlainContainerFactory(): ComponentFactory<CustomPlainComponent> {
      return  this.componentFactoryResolver.resolveComponentFactory(CustomPlainComponent);
    }
    public  getBoxContainerFactory(): ComponentFactory<CustomBoxComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomBoxComponent);
    }
    public  getTabbedContainerFactory(): ComponentFactory<CustomTabbedComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomTabbedComponent);
    }
    public  getTableContainerFactory(): ComponentFactory<CustomTableComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomTableComponent);
    }
    public  getComboInputFactory(): ComponentFactory<CustomComboInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomComboInputComponent);
    }
    public  getPlainInputFactory(): ComponentFactory<CustomPlainInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomPlainInputComponent);
    }
    public  getTextInputFactory(): ComponentFactory<CustomTextInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomTextInputComponent);
    }
    public getConditionalInputFactory(): ComponentFactory<CustomConditionalInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(CustomConditionalInputComponent);
    }


}
