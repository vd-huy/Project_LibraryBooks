import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrarysService {

  constructor(private http : HttpClient) { }

  public getLibrarys() : Observable<any> {
    return this.http.get(environment.API_END_POINT + "/api/v1/library/all")
  }

  public deleteLibrary(id : number) :Observable<any>{
      return this.http.delete(environment.API_END_POINT + "/api/v1/library/delete/"+ id, {responseType : "text" as "json"});
  }

  public addLibrary (body : any) : Observable<any>{
      return this.http.post(environment.API_END_POINT+ "/api/v1/library/add", body, {responseType:'text' as 'json'})
  }

  public updateLibrary(id:number,body:any) :Observable<any>{
    return this.http.put(environment.API_END_POINT + "/api/v1/library/update/" + id,body,{responseType:'text' as 'json'})
  }
}
