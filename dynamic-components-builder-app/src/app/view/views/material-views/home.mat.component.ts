import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-mat-home',
  templateUrl: './home.mat.component.html',
  styleUrls: ['./home.mat.component.css']
})
export class MaterialHomeComponent implements OnInit {

  showHome = true;
  showList = false;
  showEdit = false;

  backHome(){
    this.showEdit = false;
    this.showList = false;
    this.showHome = true;
  }

  showViewList(): void {
    this.showHome = false;
    this.showList = true;
    this.hideViewEdit();
  }

  hideViewList(): void {
    this.showList = false;
  }

  showViewEdit(): void {
    this.showHome = false;
    this.showList = false;
    this.showEdit = true;
  }

  hideViewEdit(): void {
    this.showEdit = false;
  }

  showEditView(): void {
    this.showHome = false;
    this.hideViewList();
    this.showViewEdit();
  }

  showListView(): void {
    this.showHome = false;
    this.hideViewEdit();
    this.showViewList();
  }

  ngOnInit(): void {

    }


  }
