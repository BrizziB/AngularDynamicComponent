import {Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showDynamicalViewer = false;

  showViewer(): void {
    this.showDynamicalViewer = true;
  }

  showViewList(): void {

  }

  hideViewer(): void {
    this.showDynamicalViewer = false;
  }

  ngOnInit(): void {

    }


  }
