import { DynamicComponent } from './dynamic.component';
import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';


@Component({
  selector: 'app-dynamic-div',
  template: `
      <div id='content-div'>
          <div #container></div>
      </div>
  `
})
export class DivDynamicComponent extends DynamicComponent implements OnInit, OnDestroy {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
      super();
      this.containedComponents = [];
      this.containedLeaves = [];
  }
  private containedComponents: DivDynamicComponent[];
  private containedLeaves: DynamicComponent[];

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  context: number;

  addDivChildComponent(factory: ComponentFactory<DivDynamicComponent>): DivDynamicComponent {
    const newComponentRef: ComponentRef<{}> = (this.container.createComponent(factory));
    const instance = <DivDynamicComponent>newComponentRef.instance;
    instance.context = this.context + 1;
    this.containedComponents.push(instance);
    return instance;
  }

  getContainer(): ViewContainerRef {

    return this.container;
  }


addLeafChildComponent(factory: ComponentFactory<DynamicComponent>, value: string|number): DynamicComponent {
    const newComponentRef: ComponentRef<DynamicComponent> = (this.container.createComponent(factory));
    const instance = newComponentRef.instance;
    instance.context = value.toString();
    this.containedLeaves.push(instance);
    return instance;

  }
  ngOnInit() {

  }

  getContainedComponents(): DivDynamicComponent[] {
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
