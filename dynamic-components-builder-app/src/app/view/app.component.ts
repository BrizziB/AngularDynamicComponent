import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  ngOnInit(): void {

    }


  }
