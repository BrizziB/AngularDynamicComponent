import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';

import { BaseComponent } from '../dynamical-component-builder/dynamic-components/components/base.component';
import { PageBuildingDirector } from '../dynamical-component-builder/viewer-builder/page-building-director';
import { PageBuildingService } from '../services/page-building.service';



@Component({
  selector: 'app-dyn-viewer',
  templateUrl: './dynamic.viewer.component.html',
  styleUrls: ['./dynamic.viewer.component.css']
})
export class DynamicViewerComponent {
  @Output() closeClick = new EventEmitter();


  public types = [
    'personaProva',
    'Cartella Elettronica Cefalee v1.9'
  ];

  selectedValue: string = null;
  color = 'primary';
  mode = 'indeterminate';
  value = null;
  loading = false;
  typeSelected = false;

  constructor(
    private pageBuildingDirector: PageBuildingDirector,
    private pageBuildingService: PageBuildingService
  ) { }

  @ViewChild(BaseComponent)
  protected child: BaseComponent; // è un componente cui si possono aggiungere dinamicamente altri componenti
  // del tutto simile ad un  PlainContainer

  renderViewer() {
    this.child.reset();
    this.pageBuildingDirector.reset();
    this.loading = true;
    this.pageBuildingDirector.init(this.child);
    this.pageBuildingService.getPage(this.selectedValue).subscribe(
      ((resp) => {
        if (resp !== null) {
          this.pageBuildingDirector.buildPageFromScheme(resp);
          this.loading = false;
        }
      })
    );
  }

  closeModal() {
    this.selectedValue = null;
    this.typeSelected = false;
    this.child.reset();
    this.pageBuildingDirector.reset();
    this.closeClick.emit();
  }

  typeSel() {
    this.typeSelected = true;
  }

}
