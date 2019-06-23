import { Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewerListService } from '../../../services/viewer-list.service';
import { Viewer } from '../../../model/Viewer';
import { isNullOrUndefined } from 'util';
import { Type } from '../../../model/Type';

@Component({
  selector: 'app-view-list',
  templateUrl: './view.list.component.html',
  styleUrls: ['./view.list.component.css']
})
export class MaterialViewListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() showEditView = new EventEmitter();

  displayedColumns: string[] = ['name', 'description', 'type', 'actions'];
  dataSource: MatTableDataSource<Viewer>;

  viewerList: Viewer[];

  constructor(
    private viewerListService: ViewerListService
  ) {}

  protected test() {
    this.viewerListService.test()
    .subscribe((viewers: HttpResponse<String>) => {
      return;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    // per usare dataSource basta fare tipo così:
    this.paginator.pageSize = 10;
    this.paginator.showFirstLastButtons = true;
    this.viewerListService.getViewerList()
      .subscribe((viewers: HttpResponse<Viewer[]>) => {
        this.viewerList = viewers.body;
        this.dataSource = new MatTableDataSource(viewers.body);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
