import { DivDynamicComponent } from '../dynamic-components/div-dynamic.component';
import { PDynamicComponent } from '../dynamic-components/p-dynamic.component';

import {Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class PageBuilder {


  private DIV_Factory: ComponentFactory<DivDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(DivDynamicComponent);

      private P_Factory: ComponentFactory<PDynamicComponent> =
      this.componentFactoryResolver.resolveComponentFactory(PDynamicComponent);

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public addDivChildToContainer(index: DivDynamicComponent): DivDynamicComponent {
    const newDiv: DivDynamicComponent = index.addDivChildComponent(this.DIV_Factory);
    return newDiv;
  }

  public addLeafChildToContainer(parentElem: DivDynamicComponent, value: string|number) {
    parentElem.addLeafChildComponent(this.P_Factory, value);
  }

}
