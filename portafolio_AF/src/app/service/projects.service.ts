import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URL = 'https://portafolioaf-b.onrender.com/projects/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.URL + 'lista');
  }
  public detail(id: number):Observable<Projects>{
   return this.httpClient.get<Projects>(this.URL +`detail/${id}` )
  }
  public update(id: number, proj : Projects):Observable<any>{
    return this.httpClient.put<any>(this.URL +`update/${id}`, proj )
   }

   public save(proj:Projects): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proj);
      }

      public delete (id:number):Observable<any>{
        return this.httpClient.delete<any>(this.URL+`delete/${id}`);
      }
}
