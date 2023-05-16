import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'https://portafolioaf-b.onrender.com/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }
  public detail(id: number):Observable<Skills>{
   return this.httpClient.get<Skills>(this.URL +`detail/${id}` )
  }
  public update(id: number, sk : Skills):Observable<any>{
    return this.httpClient.put<any>(this.URL +`update/${id}`, sk )
   }

   public save(sk:Skills): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', sk);
      }

      public delete (id:number):Observable<any>{
        return this.httpClient.delete<any>(this.URL+`delete/${id}`);
      }
}
