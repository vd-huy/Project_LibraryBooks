import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http : HttpClient) { }

  public getBooksById (id : number, page : number, size : number) : Observable<any>{
    return this.http.get(environment.API_END_POINT + `/api/v1/book/get-all-by-library/${id}?page=${page}&size=${size}`)}

  public getUrlPicture(body : object):Observable<any>{
    return this.http.post(environment.API_END_POINT + "/api/v1/picture/upload", body,{responseType : "text" as "json"})
  }

  }


