import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isUndefined, isNullOrUndefined } from 'util';

import { JSONPage } from '../mock/jsonPage';


@Injectable({
  providedIn: 'root'
})
export class PageBuildingService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor() {}

  public getPage(): Object {
    return JSONPage;
  }


}
