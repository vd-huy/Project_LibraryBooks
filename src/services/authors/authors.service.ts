import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http : HttpClient) { }

  public getAllAuthors() : Observable<any>{
    return this.http.get(environment.API_END_POINT + "/api/v1/author/all");
  }
}
