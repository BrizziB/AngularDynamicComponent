import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isUndefined, isNullOrUndefined } from 'util';

import { JSONPage } from '../view/dynamical-viewers/dynamical-component-builder/mock/jsonPage';


@Injectable({
  providedIn: 'root'
})
export class PageBuildingService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  public getPageMOCK(): Object {
    return JSONPage;
  }

  public getPage(typeName: String): Observable<any> {
    const url = 'http://localhost:8080/empedocle-cec-1.0.0/rest/view/get/' + typeName;
    const req = this.http.get(url, {responseType: 'json'});
    return req;
  }


}
