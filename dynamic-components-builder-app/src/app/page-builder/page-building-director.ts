import {Injectable} from '@angular/core';

import { PageBuilder } from './page-builder';
import { ContainerDynamicComponent } from '../dynamic-components/components/abstract-components/_container-dynamic.component';
import { ContainerTabbedDynamicComponent } from '../dynamic-components/components/abstract-components/container-tabbed-dynamic.component';
import { NavElement } from '../dynamic-components/non-component-leaves/navElement';
import { InputPlainDynamicComponent } from '../dynamic-components/components/abstract-components/input-plain-dynamic.component';
import { InputComboDynamicComponent } from '../dynamic-components/components/abstract-components/input-combo-dynamic.component';
import { MaterialTabbedComponent } from '../dynamic-components/components/material-components/material-tabbed-container.component';
import { isNullOrUndefined } from 'util';
import { InputTextDynamicComponent } from '../dynamic-components/components/abstract-components/input-text-dynamic.component';
import { ContainerBoxDynamicComponent } from '../dynamic-components/components/abstract-components/container-box-dynamic.component';
import { MaterialComboInputComponent } from '../dynamic-components/components/material-components/material-combo-input.component';

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
    const idx = Object.keys(form);
    const innerForm = form[idx.toString()];
    this.traverseTree(innerForm, 0);
  }

  private traverseTree(form: Object, nestingLevel: number) {
    const nestingIdx: ContainerDynamicComponent = this.divStack[nestingLevel];
    let currentContainer: ContainerDynamicComponent;
    // tslint:disable-next-line:forin
    for (const component in form) {
      if (component !== 'view') {
        const element = form[component];
        let view = element.view;

        // bruttura D:
        if (isNullOrUndefined(view)) {
          view = {
            'type': null
          };
        }
        // qui se ci si fa un po'caso si leva sta cosa, però dà anche poca noia
          switch (view.type) {


            case ('composite-container'): {
              // form[component][Object.keys(form[component])[1]]
              console.log('trovato grid con composite' + view.type);
              currentContainer = this.pageBuilder.addPlainDiv(nestingIdx, component);
              this.addLeafComponents(form, component, currentContainer);
              break;
            }

            case ('container'): { // genera un div standard
              console.log('trovato grid ' + view.type);
              currentContainer = this.pageBuilder.addPlainDiv(nestingIdx, component);
              this.keepAdding(element, currentContainer, nestingLevel);
              break;
            }
            case ('box'): { // genera un div standard
              console.log('trovato box ' + view.type);
              // dovrà essere un form, di quelli col nome scritto sul riquadro
              currentContainer = this.pageBuilder.addBox(nestingIdx, component);
              (<ContainerBoxDynamicComponent>currentContainer).setLegend(form[component]['view']['label']);
              this.keepAdding(element, currentContainer, nestingLevel);
              break;
            }
            case 'tabbed-panel': {
              console.log('trovato tabbed-panel ' + view.type);
              currentContainer = this.pageBuilder.addTabbedPanel(nestingIdx, component);
              this.keepAdding(element, currentContainer, nestingLevel);
              break;
            }

            case 'tabs': { // sempre contenuto in un tabbed-panel
              console.log('trovato tabs array ' + view.type);
              this.addViewsToTabbedPage(element, nestingLevel, <ContainerTabbedDynamicComponent>nestingIdx, component);
              break;
            }

            case 'table': {
              console.log('trovato table' + view.type);
              currentContainer = this.pageBuilder.addTable(nestingIdx, component);
              this.keepAdding(element, currentContainer, nestingLevel);
              break;
            }

            case 'std-input': { // era std-input
              console.log('trovata foglia output : ' + view.type);
              this.pageBuilder.addStdInputChildToContainer(
                nestingIdx, element, component);

              break;
            }

            case 'conditional-input': {
              console.log('trovata foglia conditional : ' + view.type);
              this.pageBuilder.addConditionalInputChildToContainer(
                nestingIdx, element, component);
              break;
            }

            case 'input-text': {
              console.log('trovata foglia output : ' + view.type);
              this.pageBuilder.addStdInputChildToContainer(
                nestingIdx, element, component);
              break;
            }

            case 'combo-input': {
              console.log('trovata foglia output : ' + view.type);
              this.pageBuilder.addComboInputChildToContainer(
                nestingIdx, element, component);
              break;
            }

            case undefined || null : {
              if ( component === 'id') {
                nestingIdx.context[component] = element;
              }
              break;
            }

            default: {
              console.log('se mi vedi, qualche type non viene letto bene o rimane qualche componente in giro MEKEMEKE');
            }
        }
      }
    }
  }


  private keepAdding(elem, newDiv: ContainerDynamicComponent, nestingLevel: number) {
    this.divStack.push(newDiv);
    this.traverseTree(elem, nestingLevel + 1);
    this.divStack.pop();
  }

  private addViewsToTabbedPage(viewsObject, nestingLevel: number, tabbedPage: ContainerDynamicComponent, component) {
    for (const element in viewsObject) { // aggiungo le label
      if (element !== 'view') {
        const navElem = new NavElement(viewsObject[element].id, element);
        this.pageBuilder.addTabToPanel(<ContainerTabbedDynamicComponent>tabbedPage, navElem);
        const currentContainer = this.pageBuilder.addBox(tabbedPage, component);
        currentContainer.context.id = viewsObject[element].id;
        const tmp = viewsObject[element];
        this.keepAdding({ tmp }, currentContainer, nestingLevel);
      }
    }
  }

  private addLeafComponents(form, component, container) {
    const leafIndexes: String[] = [];
    leafIndexes.push(Object.keys(form[component])[1]);
    leafIndexes.push(Object.keys(form[component])[2]);

    const firstLeaf = form[component][Object.keys(form[component])[1]];
    const secondLeaf = form[component][Object.keys(form[component])[2]];

    const label = form[component].view.label;
    const value = firstLeaf.fact.value;
    const selectValues = secondLeaf.type.values;
    const selectedValue = secondLeaf.fact.value;

    this.pageBuilder.addCompositeElem(container, label, value, selectValues, selectedValue);


  }




}
