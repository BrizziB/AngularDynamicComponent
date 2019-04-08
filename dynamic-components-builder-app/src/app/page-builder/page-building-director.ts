import {Injectable} from '@angular/core';

import { PageBuilder } from './page-builder';
import { ContainerDynamicComponent } from '../dynamic-components/container-dynamic.component';
import { isNullOrUndefined } from 'util';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { DynamicComponent } from '../dynamic-components/dynamic.component';
import { TabbedPanelDynamicComponent } from '../dynamic-components/tabbedPanel-dynamic.component';
import { NavElement } from '../dynamic-components/leaves/navElement';
import { LeafDynamicComponent } from '../dynamic-components/leaf-dynamic.component';
import { StdInputDynamicComponent } from '../dynamic-components/stdInput-dynamic.component';
import { ComboInputDynamicComponent } from '../dynamic-components/comboInput-dynamic.component';

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
        switch (element.type) {
          case ('container'): { // genera un div standard
            console.log('trovato page ' + element);
            currentContainer = this.pageBuilder.addPlainDiv(nestingIdx, component);
            this.keepAdding(element, currentContainer, nestingLevel);
            break;
          }

          case 'tabbed-panel': {
            console.log('trovato tabbed-panel ' + element);
            currentContainer = this.pageBuilder.addTabbedPanel(nestingIdx, component);
            this.keepAdding(element, currentContainer, nestingLevel);
            break;
          }

          case 'views': { // sempre contenuto in un tabbed-panel
            console.log('trovato tabs array ' + element);
            const components: NavElement[] = [];
            this.addViewsToTabbedPage(element, nestingLevel, <TabbedPanelDynamicComponent>nestingIdx, component);
            break;
          }

          case 'table': {
            console.log('trovato table' + element);
            currentContainer = this.pageBuilder.addTable(nestingIdx, component);
            this.keepAdding(element, currentContainer, nestingLevel);
            break;
          }

          case 'std-input': {
            console.log('trovata foglia output : ' + element.value);
            const currentLeaf: StdInputDynamicComponent = this.pageBuilder.addStdInputChildToContainer(nestingIdx, element);
            currentLeaf.propertyName = component;
            currentLeaf.propertyValue = element.value;
            break;
          }

          case 'combo-input': {
            console.log('trovata foglia output : ' + element.value);
            const currentLeaf: ComboInputDynamicComponent = this.pageBuilder.addComboInputChildToContainer(nestingIdx, element);
            currentLeaf.propertyName = component;
            currentLeaf.values = element.values;
            break;
          }

          case undefined: {
            if ( component === 'id') {
              nestingIdx.context[component] = element;
            }
            break;
          }

          default: {
            console.log('se mi vedi, qualche type non viene letto bene o rimane qualche componente in giro MEKEMEKE');
          }
      }
      // qui vediamo un po' come farlo, alla fine non penso si potrà prescindere dai check sulle string :(


    }
  }

  private addViewsToTabbedPage(viewsObject, nestingLevel: number, tabbedPage: ContainerDynamicComponent, component) {
    for (const element in viewsObject) { // aggiungo le label
      if (element !== 'type') {
        const navElem = new NavElement(viewsObject[element].id, element);
        this.pageBuilder.addTabToPanel(<TabbedPanelDynamicComponent>tabbedPage, navElem);
        const currentContainer = this.pageBuilder.addBox(tabbedPage, component);
        currentContainer.context.id = viewsObject[element].id;
        const tmp = viewsObject[element];
        this.keepAdding({ tmp }, currentContainer, nestingLevel);
      }
    }
  }

  private keepAdding(elem, newDiv: ContainerDynamicComponent, nestingLevel: number) {
    this.divStack.push(newDiv);
    this.traverseTree(elem, nestingLevel + 1);
    this.divStack.pop();
  }



}
