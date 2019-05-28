import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { ViewerListService } from '../services/viewer-list.service';
import { Viewer } from '../model/Viewer';
import { isNullOrUndefined } from 'util';
import { Type } from '../model/Type';

@Component({
  selector: 'app-view-list',
  templateUrl: './view.list.component.html',
  styleUrls: ['./view.list.component.css']
})
export class ViewListComponent implements OnInit {
  @Output() showEditView = new EventEmitter();

  displayedColumns: string[] = ['name', 'description', 'type', 'actions'];
  dataSource: MatTableDataSource<Viewer>;

  viewerList: Viewer[];

  constructor(
    private viewerListService: ViewerListService
  ) {}


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    // per usare dataSource basta fare tipo così:

    this.viewerListService.getViewerList()
      .subscribe((viewers: HttpResponse<Viewer[]>) => {
        this.viewerList = viewers.body;
        this.dataSource = new MatTableDataSource(viewers.body);
      });
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
