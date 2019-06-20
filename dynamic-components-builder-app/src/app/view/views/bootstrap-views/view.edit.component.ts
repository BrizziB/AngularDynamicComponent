import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Type } from '../../../model/Type';
import { ViewerEditService } from '../../../services/viewer-edit.service';
import { isNullOrUndefined } from 'util';


export interface SelectItem {
  label: String;
  value: String;
}

@Component({
  selector: 'app-view-edit-bs',
  templateUrl: './view.edit.component.html',
  styleUrls: ['./view.edit.component.css']
})
export class BootstrapViewEditComponent implements OnInit {
  @Output() showListView = new EventEmitter();

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

  protected getViewerOutput() {
    if (!isNullOrUndefined(this.typeName) && !isNullOrUndefined(this.cid)) {
      this.viewerEditService.getViewerOutput(this.cid, this.typeName).subscribe(
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
          alert('viewer salvato');
        }
      );
    }
  }

  protected validateViewer() {
    if (!isNullOrUndefined(this.typeName) && !isNullOrUndefined(this.cid)) {
      this.viewerEditService.validateViewer(this.cid).subscribe(
        (resp: Boolean) => {
          if (resp === true) {
          alert('validazione superata con successo');
          } else {
            alert('validazione fallita');
          }
        }
      );
    }
  }

  protected closeViewerEditor() {
    this.viewerEditService.closeConversation(this.cid).subscribe(
      (resp) => {
        console.log(resp);
        this.viewName = null;
        this.typeName = null;
        this.typeList = null;
        this.dslContent = null;
        this.CSSContent = null;
        this.showListView.emit();
      }
    );
  }


  protected getPreview() {
    this.showDynamicalViewer = true;
  }

}
