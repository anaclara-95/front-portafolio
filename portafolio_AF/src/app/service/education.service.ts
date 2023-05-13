import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = 'http://localhost:8080/education/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.URL + `detail/${id}`)
  }
  public update(id: number, edu: Education): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, edu)
  }

  public save(edu: Education): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', edu);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }

}
