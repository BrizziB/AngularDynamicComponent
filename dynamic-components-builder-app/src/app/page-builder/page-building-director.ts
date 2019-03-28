import {Injectable} from '@angular/core';

import { PageBuilder } from './page-builder';

@Injectable({
  providedIn: 'root'
})
export class PageBuildingDirector {

  private divStack;
  constructor(private pageBuilder: PageBuilder) {
    this.divStack = [];
  }

  public init(anchorComponent) {
    anchorComponent.context = 0; // può essere un oggetto generico ottenuto dal json
    this.divStack.push(anchorComponent);
  }

  public buildPageFromScheme(form: Object) {
    this.traverseTree(form, 0);
  }

  private traverseTree(form: Object, nestingLevel: number) {
    const nestingIdx = this.divStack[nestingLevel];
    for (const element in form) {
      if (typeof form[element] !== 'object') { // ho trovato una leaf

        this.pageBuilder.addLeafChildToContainer(nestingIdx, form[element]);

      } else { // ho un div, perchè form[element] è di tipo Object
        // qui si entra nel div nuovo, è dove si farebbe il push allo stack di riferimenti ai div
        const newDiv = this.pageBuilder.addDivChildToContainer(nestingIdx);
        this.divStack.push(newDiv);
        this.traverseTree(form[element], nestingLevel + 1);
        this.divStack.pop();
      }
    }
  }

}
