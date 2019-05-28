import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Type } from '../model/Type';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view.edit.component.html',
  styleUrls: ['./view.edit.component.css']
})
export class ViewEditComponent implements OnInit {

  viewName: String;
  viewType: Type;


  ngOnInit() {
    this.viewName = '';
    this.viewType = null;
  }

}
