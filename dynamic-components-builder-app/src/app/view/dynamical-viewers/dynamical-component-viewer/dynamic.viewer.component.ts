import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';

import { BaseComponent } from '../dynamical-component-builder/dynamic-components/components/base.component';
import { PageBuildingDirector } from '../dynamical-component-builder/viewer-builder/page-building-director';
import { PageBuildingService } from '../../../services/page-building.service';



@Component({
  selector: 'app-dyn-viewer',
  templateUrl: './dynamic.viewer.component.html',
  styleUrls: ['./dynamic.viewer.component.css']
})
export class DynamicViewerComponent implements OnInit {
  @Input() typeName: String;
  @Output() closeClick = new EventEmitter();

  color = 'primary';
  mode = 'indeterminate';
  value = null;
  loading = false;

  constructor(
    private pageBuildingDirector: PageBuildingDirector,
    private pageBuildingService: PageBuildingService
  ) { }

  @ViewChild(BaseComponent)
  protected child: BaseComponent; // è un componente cui si possono aggiungere dinamicamente altri componenti
  // del tutto simile ad un  PlainContainer

  ngOnInit() {
    this.loading = true;
    this.pageBuildingDirector.init(this.child);
    this.pageBuildingService.getPage(this.typeName).subscribe(
      ((resp) => {
        if (resp !== null) {
          this.pageBuildingDirector.buildPageFromScheme(resp);
          this.loading = false;
        }
      })
    );
  }

  closeModal() {
    this.child.reset();
    this.pageBuildingDirector.reset();
    this.closeClick.emit();
  }


}
