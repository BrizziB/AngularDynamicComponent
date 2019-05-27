import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isUndefined, isNullOrUndefined } from 'util';
import { Viewer } from '../model/Viewer';



@Injectable({
  providedIn: 'root'
})
export class ViewerListService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}


  public getViewerList(): Observable<HttpResponse<Viewer[]>> {
    const url = 'http://localhost:8080/empedocle-cec-1.0.0/rest/viewer/get-list/';
    const req = this.http.get<Viewer[]> (url,
          {withCredentials: true, headers: this.httpOptions.headers, observe: 'response'}
      );
    return req;
  }


}
