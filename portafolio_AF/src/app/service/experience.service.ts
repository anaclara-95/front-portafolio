import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'http://localhost:8080/experience/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.URL + `detail/${id}`)
  }
  public update(id: number, exp: Experience): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, exp)
  }

  public save(exp: Experience): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', exp);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }


}
