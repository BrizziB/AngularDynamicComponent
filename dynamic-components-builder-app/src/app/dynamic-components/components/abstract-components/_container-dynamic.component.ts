import { DynamicComponent } from './__base-dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { LeafDynamicComponent } from './_input-dynamic.component';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-dynamic-div',
  template: `no-template`
})
export abstract class ContainerDynamicComponent extends DynamicComponent implements OnInit, OnDestroy {

  constructor() {
      super();
      this.containedComponents = [];
      this.containedLeaves = [];
  }
  protected containedComponents: ContainerDynamicComponent[];
  protected containedLeaves: DynamicComponent[];

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  context: any ;

  ngOnInit() {
  }

  public addDivChildComponent(factory: ComponentFactory<ContainerDynamicComponent>, name: string): ContainerDynamicComponent {
    const newComponentRef: ComponentRef<ContainerDynamicComponent> = (this.container.createComponent(factory));
    const instance = <ContainerDynamicComponent>newComponentRef.instance;
    instance.context.name = name;
    this.containedComponents.push(instance);
    return instance;
  }

  public getContainer(): ViewContainerRef {
    return this.container;
  }


  public addLeafChildComponent(factory: ComponentFactory<LeafDynamicComponent>, value: string|number): DynamicComponent {
    const newComponentRef: ComponentRef<LeafDynamicComponent> = (this.container.createComponent(factory));
    const instance = newComponentRef.instance;

    if (!isNullOrUndefined(value)) {
      instance.context = (value);
    }

    this.containedLeaves.push(instance);
    return instance;
  }

  public getContainedComponents(): ContainerDynamicComponent[] {
    return this.containedComponents;
  }

  public getContainedLeaves(): DynamicComponent[] {
    return this.containedLeaves;
  }

  ngOnDestroy() {
      this.containedComponents = [];
      this.containedLeaves = [];
  }










}
