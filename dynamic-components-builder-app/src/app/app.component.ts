import {Component, Input, OnInit, OnDestroy,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { DynamicComponent } from './dynamic-components/dynamic.component';
import { DivDynamicComponent } from './dynamic-components/div-dynamic.component';
import { PDynamicComponent } from './dynamic-components/p-dynamic.component';

import { JSONPage } from './mock/jsonPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'dynamic-components-builder';

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.divStack = [];
  }

  @ViewChild(DivDynamicComponent)
  private child: DivDynamicComponent;

  private DIV_Factory = this.componentFactoryResolver.resolveComponentFactory(DivDynamicComponent);
  private P_Factory = this.componentFactoryResolver.resolveComponentFactory(PDynamicComponent);

  private divStack: DivDynamicComponent[];

  ngOnInit() {
    // le due factory poi le tengo come attributi della classe, queste funzionalità vanno portate su service poi


    this.divStack.push(this.child);
    this.child.context = 0; // qui se serve si può passare un intero oggetto, che potrebbe essere un'eventuale conoscienza condivisa

    const jsonPage = JSONPage;
/*     const jsonString = JSON.stringify(jsonPage);
     */
    console.log('caneGonfio');
    this.traverseTree(JSONPage, 0);

  }

// -------- questi metodi gestiscono il traversamento dell'oggetto ottenuto dal JSON -------------

    public traverseTree(form: Object, nestingLevel: number) {
      const nestingIdx = this.divStack[nestingLevel];
      for (const element in form) {
        if (typeof form[element] !== 'object') { // ho trovato una leaf
          this.addLeafChildToContainer(nestingIdx, form[element]);
          // qui poi bisogna capire se un elemento è l'ultimo dell'array, in questo modo si può fare il pop dallo stack

        } else { // ho un div, perchè form[element] è di tipo Object
          // qui si entra nel div nuovo, è dove si farebbe il push allo stack di riferimenti ai div
          console.log(typeof form[element]);
          this.addDivChildToContainer(nestingIdx);
          this.traverseTree(form[element], nestingLevel + 1);
          this.divStack.pop();
        }
      }
    }



// -- fine metodi di traversamento - questi credo potrebbero essere implementati in un director/visitor ---


// -------- questi metodi potrebbe essere bellino averli su un builder ----------------------------
  public addDivChildToContainer(index: DivDynamicComponent) {
    const newDiv: DivDynamicComponent = index.addDivChildComponent(this.DIV_Factory);
    this.divStack.push(newDiv);
  }

  public addLeafChildToContainer(parentElem: DivDynamicComponent, value: string|number) {
    parentElem.addLeafChildComponent(this.P_Factory, value);
  }

  endDivEditing(): DivDynamicComponent {
    const closingDiv = this.divStack.pop();
    return closingDiv;
  }
// -------------------------- fine metodi da builder -----------------------------------------------
}
