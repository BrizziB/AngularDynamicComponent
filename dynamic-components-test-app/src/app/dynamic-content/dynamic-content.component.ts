import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';

export abstract class DynamicComponent {
  context: any;
}

@Component({
  selector: 'app-dynamic-content',
  template: `
      <div id='content-div'>
          <button (click)='addEmptyComponent()' > ADD</button>
          <button (click)='addComponentToChild()' > AddToChild</button>
          <div #container></div>
      </div>
  `
})
export class DynamicContentComponent extends DynamicComponent implements OnInit, OnDestroy  {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;


  @Input()
  context = 'test';

  savedInstance: DynamicContentComponent;



  private componentRef: ComponentRef<{}>;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver) {
        super();
  }



  ngOnInit() {
    // note: componentType must be declared within module.entryComponents
    const factory1 = this.componentFactoryResolver.resolveComponentFactory(DynamicSample1Component);
    const factory2 = this.componentFactoryResolver.resolveComponentFactory(DynamicSample2Component);
    this.componentRef = this.container.createComponent(factory1);

    let instance = <DynamicComponent> this.componentRef.instance;
    instance.context = this.context;
    this.componentRef = this.container.createComponent(factory2);

    // set component context
    instance = <DynamicComponent> this.componentRef.instance;
    instance.context = this.context;
  }

  addFinalComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicSample1Component);
    this.componentRef = this.container.createComponent(factory);
    const instance = <DynamicContentComponent> this.componentRef.instance;
    instance.context = this.context;
  }

  addEmptyComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicContentComponent);
    this.componentRef = this.container.createComponent(factory);
    const instance = <DynamicContentComponent> this.componentRef.instance;
    // instance.addFinalComponent();
    this.savedInstance = instance;
    instance.context = this.context;
  }

  addComponentToChild() {
    this.savedInstance.addFinalComponent();
  }

  ngOnDestroy() {
      if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
      }
  }

}

@Component({
  selector: 'app-dynamic-sample-1',
  template: `
  <output> sono un output -> {{context}} </output>
`
})
export class DynamicSample1Component extends DynamicComponent {}

@Component({
  selector: 'app-dynamic-sample-2',
  template: `<p>Sono un Paragraph con contenuto ({{context}})</p>`
})
export class DynamicSample2Component extends DynamicComponent {}

@Component({
  selector: 'app-unknown-component',
  template: `<div>Unknown component ({{context}})</div>`
})
export class UnknownDynamicComponent extends DynamicComponent {}
