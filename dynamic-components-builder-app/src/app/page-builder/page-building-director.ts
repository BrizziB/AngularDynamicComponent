import {Injectable} from '@angular/core';

import { PageBuilder } from './page-builder';
import { ContainerDynamicComponent } from '../dynamic-components/container-dynamic.component';
import { isNullOrUndefined } from 'util';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { DynamicComponent } from '../dynamic-components/dynamic.component';
import { TabbedPanelDynamicComponent } from '../dynamic-components/tabbedPanel-dynamic.component';
import { NavElement } from '../dynamic-components/leaves/navElement';

@Injectable({
  providedIn: 'root'
})
export class PageBuildingDirector {

  private divStack;
  constructor(private pageBuilder: PageBuilder) {
    this.divStack = [];
  }

  public init(anchorComponent) {
    anchorComponent.context = new Object; // può essere un oggetto generico ottenuto dal json
    this.divStack.push(anchorComponent);
  }

  public buildPageFromScheme(form: Object) {
    this.traverseTree(form, 0);
  }
/*
  private traverseTree(form: Object, nestingLevel: number) {
    const nestingIdx = this.divStack[nestingLevel];
    // tslint:disable-next-line:forin
    for (const element in form) {
      if (element === 'leaf') { // ho trovato una leaf
        this.pageBuilder.addLeafChildToContainer(nestingIdx, form[element].value);
      } else
      if (element === 'type') {
        // non fa niente
      } else
      if (Array.isArray(form[element])) {
        const components = (Array)(form[element]); // il casting è inevitabile penso
        // tslint:disable-next-line:forin
        for (let i = 0; i < components.length; i ++) {
          this.traverseTree(components[i], nestingLevel);
        }
      } else {
        // qui si entra nel div nuovo, è dove si farebbe il push allo stack di riferimenti ai div
        const elem = form[element];
        const divType = elem.type;
        const newDiv = this.insertElement(nestingIdx, divType);
        this.divStack.push(newDiv);
        this.traverseTree(elem, nestingLevel + 1);
        this.divStack.pop();
      }
    }
  } */


  private traverseTree(form: Object, nestingLevel: number) {
    const nestingIdx: ContainerDynamicComponent = this.divStack[nestingLevel];
    let currentContainer: ContainerDynamicComponent;
    // tslint:disable-next-line:forin
    for (const component in form) {
      const element = form[component];

      // qui vediamo un po' come farlo, alla fine non penso si potrà prescindere dai check sulle string :(
      switch (component) {

        case 'id': {
          console.log('trovato id ' + element);
          nestingIdx.context.id = element;
          break;
        }
        case 'page': {
          console.log('trovato page ' + element);
          currentContainer = this.pageBuilder.addPlainDiv(nestingIdx);
          this.addElement(element, currentContainer, nestingLevel);
          break;
        }
        case 'tabbed-panel': {
          console.log('trovato tabbed-panel ' + element);
          currentContainer = this.pageBuilder.addTabbedPanel(nestingIdx);
          this.addElement(element, currentContainer, nestingLevel);
          break;
        }

        case 'tabs': {
          console.log('trovato tabs array ' + element);
          const components: NavElement[] = [];
          element.forEach(elem => {
            components.push(elem);
          });
          this.pageBuilder.addTabsToPanel(<TabbedPanelDynamicComponent>nestingIdx, components);


          break;
        }

      }
    }
  }

  private addElement(elem, newDiv: ContainerDynamicComponent, nestingLevel: number) {
    this.divStack.push(newDiv);
    this.traverseTree(elem, nestingLevel + 1);
    this.divStack.pop();
  }

  private isLeaf(form, element): boolean { // deve ritornare true per tutti gli elementi che non possono contenerne altri.
    // sicuramente ci sarà da modificare la condizione
    if (element === 'leaf') {
      return true;
    } else { return false; }
  }

  private insertElement(nestingIdx: ContainerDynamicComponent, divType: string) {
  // e questa sarà una funzione stile lookup-table bruttissima ma credo inevitabile
    switch (divType) {
      case 'tabbed-panel': {
        return this.pageBuilder.addTabbedPanel(nestingIdx);
      }
      case 'page': {
        return this.pageBuilder.addPlainDiv(nestingIdx);
      }
    }
  }

}
