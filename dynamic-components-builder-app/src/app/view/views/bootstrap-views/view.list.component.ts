import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ViewerListService } from '../../../services/viewer-list.service';
import { Viewer } from '../../../model/Viewer';
import { isNullOrUndefined } from 'util';
import { Type } from '../../../model/Type';
import * as $ from 'jquery';
import 'datatables.net';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-view-list-bs',
  templateUrl: './view.list.component.html',
  styleUrls: ['./view.list.component.css']
})
export class BootstrapViewListComponent implements OnInit, OnDestroy {
  @Output() showEditView = new EventEmitter();

  viewerList: Viewer[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private viewerListService: ViewerListService
  ) {}

  protected test() {
    this.viewerListService.test()
    .subscribe((viewers: HttpResponse<String>) => {
      return;
    });
  }


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.viewerListService.getViewerList()
      .subscribe((viewers: HttpResponse<Viewer[]>) => {
        this.viewerList = viewers.body;
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  viewViewer() {
    alert('funzione non ancora implementata');
  }

  addViewer() {
    this.showEditView.emit();
  }

  getType(type: Type): String {
    if ( !isNullOrUndefined(type)) {
      return type.name;
    } else {
      return 'no-type';
    }
  }

}
