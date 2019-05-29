import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isUndefined, isNullOrUndefined } from 'util';
import { SelectItem } from '../view/view.edit.component';



@Injectable({
  providedIn: 'root'
})
export class ViewerEditService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}


  public getConversationID(): Observable<HttpResponse<String>> {
    const url = 'http://localhost:8080/empedocle-cec-1.0.0/rest/viewer-edit/conversation/start';
    const req = this.http.get<String> (url,
          {withCredentials: true, headers: this.httpOptions.headers, observe: 'response'}
      );
    return req;
  }

  public getTypeList(cid: String): Observable<HttpResponse<SelectItem[]>> {
    const url = 'http://localhost:8080/empedocle-cec-1.0.0/rest/viewer-edit/type-list/get/?cid=' + cid;
    const req = this.http.get<SelectItem[]> (url,
          {withCredentials: true, headers: this.httpOptions.headers, observe: 'response'}
      );
    return req;
  }

  public getViewerEdit(cid: String, typeName: String): Observable<String> {
    const url = 'http://localhost:8080/empedocle-cec-1.0.0/rest/viewer-edit/viewer/edit/get/' + typeName + '/?cid=' + cid;
    const req = this.http.get (url,
          {withCredentials: true, responseType: 'text'}
      );
    return req;
  }


}
