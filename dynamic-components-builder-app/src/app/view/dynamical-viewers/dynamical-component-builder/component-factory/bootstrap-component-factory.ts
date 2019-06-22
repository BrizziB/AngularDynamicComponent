import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory, Component} from '@angular/core';
import { AbstractComponentFactory } from './abstract-component-factory';
import { BootstrapPlainComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-plain-container.component';
import { BootstrapBoxComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-box-container.component';
import { BootstrapTabbedComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-tabbed-container.component';
import { BootstrapTableComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-table-container.component';
import { BootstrapComboInputComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-combo-input.component';
import { BootstrapPlainInputComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-plain-input.component';
import { BootstrapTextInputComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-text-input.component';
import { BootstrapConditionalInputComponent
} from '../dynamic-components/components/bootstrap-components/bootstrap-conditional-input.component';
import { BootstrapCompositeLeafComponent } from '../dynamic-components/components/bootstrap-components/bootstrap-composite-leaf.component';


export class BootstrapComponentFactory extends AbstractComponentFactory {

  constructor(
    protected componentFactoryResolver: ComponentFactoryResolver) {
      super(componentFactoryResolver);
    }

    public  getPlainContainerFactory(): ComponentFactory<BootstrapPlainComponent> {
      return  this.componentFactoryResolver.resolveComponentFactory(BootstrapPlainComponent);
    }
    public  getBoxContainerFactory(): ComponentFactory<BootstrapBoxComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapBoxComponent);
    }
    public  getTabbedContainerFactory(): ComponentFactory<BootstrapTabbedComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapTabbedComponent);
    }
    public  getTableContainerFactory(): ComponentFactory<BootstrapTableComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapTableComponent);
    }
    public  getComboInputFactory(): ComponentFactory<BootstrapComboInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapComboInputComponent);
    }
    public  getPlainInputFactory(): ComponentFactory<BootstrapPlainInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapPlainInputComponent);
    }
    public  getTextInputFactory(): ComponentFactory<BootstrapTextInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapTextInputComponent);
    }
    public getConditionalInputFactory(): ComponentFactory<BootstrapConditionalInputComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapConditionalInputComponent);
    }

    public getCompositeComponentFactory(): ComponentFactory<BootstrapCompositeLeafComponent> {
      return this.componentFactoryResolver.resolveComponentFactory(BootstrapCompositeLeafComponent);
    }


}
