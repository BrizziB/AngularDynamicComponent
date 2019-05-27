import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { ViewerListService } from '../services/viewer-list.service';
import { Viewer } from '../model/Viewer';
import { isNullOrUndefined } from 'util';
import { Type } from '../model/Type';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-view-list',
  templateUrl: './view.list.component.html',
  styleUrls: ['./view.list.component.css']
})
export class ViewListComponent implements OnInit {

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

  getType(type: Type): String{
    if ( !isNullOrUndefined(type)) {
      return type.name;
    } else {
      return 'no-type';
    }
  }

}
