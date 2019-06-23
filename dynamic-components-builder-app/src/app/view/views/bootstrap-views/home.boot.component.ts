import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-boot-home',
  templateUrl: './home.boot.component.html',
  styleUrls: ['./home.boot.component.css']
})
export class BootstrapHomeComponent implements OnInit {

  showList = false;
  showEdit = false;

  showViewList(): void {
    this.showList = true;
    this.hideViewEdit();
  }

  hideViewList(): void {
    this.showList = false;
  }

  showViewEdit(): void {
    this.showEdit = true;
  }

  hideViewEdit(): void {
    this.showEdit = false;
  }

  showEditView(): void {
    this.hideViewList();
    this.showViewEdit();
  }

  showListView(): void {
    this.hideViewEdit();
    this.showViewList();
  }

  ngOnInit(): void {

    }


  }
