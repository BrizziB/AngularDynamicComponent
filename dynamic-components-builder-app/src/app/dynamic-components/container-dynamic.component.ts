import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { LeafDynamicComponent } from './leaf-dynamic.component';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-dynamic-div',
  template: `ERROR`
})
export abstract class ContainerDynamicComponent extends DynamicComponent implements OnInit, OnDestroy {

  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {
      super();
      this.containedComponents = [];
      this.containedLeaves = [];
  }
  protected containedComponents: ContainerDynamicComponent[];
  protected containedLeaves: DynamicComponent[];

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  context: any;

  ngOnInit() {
  }

  addDivChildComponent(factory: ComponentFactory<ContainerDynamicComponent>): ContainerDynamicComponent {
    const newComponentRef: ComponentRef<ContainerDynamicComponent> = (this.container.createComponent(factory));
    const instance = <ContainerDynamicComponent>newComponentRef.instance;
    this.containedComponents.push(instance);
    return instance;
  }

  getContainer(): ViewContainerRef {
    return this.container;
  }


addLeafChildComponent(factory: ComponentFactory<LeafDynamicComponent>, value: string|number): DynamicComponent {
    const newComponentRef: ComponentRef<LeafDynamicComponent> = (this.container.createComponent(factory));
    const instance = newComponentRef.instance;

    if (!isNullOrUndefined(value)) {
      instance.context = (value.toString());
    }

    this.containedLeaves.push(instance);
    return instance;
  }

  getContainedComponents(): ContainerDynamicComponent[] {
    return this.containedComponents;
  }

  getContainedLeaves(): DynamicComponent[] {
    return this.containedLeaves;
  }

  ngOnDestroy() {
      this.containedComponents = [];
      this.containedLeaves = [];
  }










}
