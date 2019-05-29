import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Type } from '../model/Type';
import { ViewerEditService } from '../services/viewer-edit.service';
import { isNullOrUndefined } from 'util';


export interface SelectItem {
  label: String;
  value: String;
}

@Component({
  selector: 'app-view-edit',
  templateUrl: './view.edit.component.html',
  styleUrls: ['./view.edit.component.css']
})
export class ViewEditComponent implements OnInit {

  showDynamicalViewer = false;
  generated = false;

  viewName: String;
  viewType: Type;
  typeName: String; // per semplicità
  typeList: SelectItem[];
  dslContent: String = '';
  CSSContent: String = '';
  cid: String;

  constructor(
    private viewerEditService: ViewerEditService
  ) {  }

  ngOnInit() {
    this.viewType = null;
    this.viewerEditService.getConversationID().subscribe(
      (cid: HttpResponse<String>) => {
        this.cid = cid.body;
        this.viewerEditService.getTypeList(this.cid).subscribe(
          (resp: HttpResponse<SelectItem[]>) => {
            this.typeList = resp.body;
          }
        );
    });
  }

  protected closePage() {

  }

  protected getViewerEdit() {
    if (!isNullOrUndefined(this.typeName) && !isNullOrUndefined(this.cid)) {
      this.viewerEditService.getViewerEdit(this.cid, this.typeName).subscribe(
        (resp: String) => {
          this.dslContent = resp;
          this.generated = true;
          this.viewerEditService.getViewerCSS(this.cid, this.typeName).subscribe(
            (response: String) => {
              this.CSSContent = response;
            }
          );
        }
      );
    } else {
      alert ('choose a type');
    }
  }

  protected saveViewer() {
    if (!isNullOrUndefined(this.typeName) && !isNullOrUndefined(this.cid)) {
      this.viewerEditService.saveViewer(this.cid, this.viewName).subscribe(
        (resp: Boolean) => {
          alert('saved: ' + resp);
        }
      );
    }
  }

  protected getPreview() {
    this.showDynamicalViewer = true;
  }

  protected getViewerOutput(typeName: String) {
    alert('todo');
  }


}
