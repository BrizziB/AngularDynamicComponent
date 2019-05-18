import {Component, OnInit, ViewChild} from '@angular/core';
import { PageBuildingDirector } from './page-builder/page-building-director';
import { PageBuildingService } from './services/page-building.service';
import { BaseComponent } from './base.component';
import { HttpResponse, HttpHeaders } from '@angular/common/http';



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

  @ViewChild(BaseComponent)
  protected child: BaseComponent; // è un componente cui si possono aggiungere dinamicamente altri componenti
  // del tutto simile ad un  PlainContainer

  ngOnInit(): void {
    this.pageBuildingDirector.init(this.child);
    this.pageBuildingService.getPage().subscribe(
      ((resp) => {
        if (resp !== null) {
          this.pageBuildingDirector.buildPageFromScheme(resp);
        }
      })
    );
    }


  }
