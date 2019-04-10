import {Component, OnInit, ViewChild} from '@angular/core';
import { PlainDivDynamicComponent } from './dynamic-components/plainDiv-dynamic.component';
import { PageBuildingDirector } from './page-builder/page-building-director';
import { PageBuildingService } from './services/page-building.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'dynamic-components-builder';

  constructor(
    private pageBuildingDirector: PageBuildingDirector,
    private pageBuildingService: PageBuildingService
  ) {}

  @ViewChild(PlainDivDynamicComponent)
  private child: PlainDivDynamicComponent;

  ngOnInit() {
    this.pageBuildingDirector.init(this.child);
    const pageScheme = this.pageBuildingService.getPage();
    this.pageBuildingDirector.buildPageFromScheme(pageScheme);
    }


  }
