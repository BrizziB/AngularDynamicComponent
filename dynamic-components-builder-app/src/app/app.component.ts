import {Component, OnInit, ViewChild} from '@angular/core';
import { ContainerPlainDynamicComponent } from './dynamic-components/components/abstract-components/container-plain-dynamic.component';
import { PageBuildingDirector } from './page-builder/page-building-director';
import { PageBuildingService } from './services/page-building.service';
import { MaterialPlainComponent } from './dynamic-components/components/material-components/material-plain-container.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'Dynamical Components';

  constructor(
    private pageBuildingDirector: PageBuildingDirector,
    private pageBuildingService: PageBuildingService
  ) { }

  @ViewChild(MaterialPlainComponent)
  private child: MaterialPlainComponent; // TODO risolvi questa brutta cosa !

  ngOnInit() {
    this.pageBuildingDirector.init(this.child);
    const pageScheme = this.pageBuildingService.getPage();
    this.pageBuildingDirector.buildPageFromScheme(pageScheme);
    }


  }
