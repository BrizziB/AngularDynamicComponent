import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory, Component} from '@angular/core';
import { AbstractComponentFactory } from './abstract-component-factory';
import { MaterialPlainComponent } from '../dynamic-components/components/material-components/material-plain-container.component';
import { MaterialBoxComponent } from '../dynamic-components/components/material-components/material-box-container.component';
import { MaterialTabbedComponent } from '../dynamic-components/components/material-components/material-tabbed-container.component';
import { MaterialTableComponent } from '../dynamic-components/components/material-components/material-table-container.component';
import { MaterialComboInputComponent } from '../dynamic-components/components/material-components/material-combo-input.component';
import { MaterialPlainInputComponent } from '../dynamic-components/components/material-components/material-plain-input.component';
import { MaterialTextInputComponent } from '../dynamic-components/components/material-components/material-text-input.component';
import { MaterialConditionalInputComponent } from '../dynamic-components/components/material-components/material-conditional-input.component';


export class MaterialComponentFactory extends AbstractComponentFactory{

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
    }

    public  getPlainContainerFactory(): ComponentFactory<MaterialPlainComponent> {
     return  this.componentFactoryResolver.resolveComponentFactory(MaterialPlainComponent);
    }
    public  getBoxContainerFactory(): ComponentFactory<MaterialBoxComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialBoxComponent);
    }
    public  getTabbedContainerFactory(): ComponentFactory<MaterialTabbedComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialTabbedComponent);
    }
    public  getTableContainerFactory(): ComponentFactory<MaterialTableComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialTableComponent);
    }
    public  getComboInputFactory(): ComponentFactory<MaterialComboInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialComboInputComponent);
    }
    public  getPlainInputFactory(): ComponentFactory<MaterialPlainInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialPlainInputComponent);
    }
    public  getTextInputFactory(): ComponentFactory<MaterialTextInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialTextInputComponent);
    }
    public getConditionalInputFactory(): ComponentFactory<MaterialConditionalInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(MaterialConditionalInputComponent);
    }


}
