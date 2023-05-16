import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona} from '../model/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'https://portafolioaf-b.onrender.com/persona/';

  constructor(private httpClient: HttpClient) { } 

public lista(): Observable<Persona> {
  return this.httpClient.get<Persona>(this.URL + 'lista');
}
public detail(id: number):Observable<Persona>{
 return this.httpClient.get<Persona>(this.URL +`detail/${id}` )
}
public update(id: number, per :Persona):Observable<any>{
  return this.httpClient.put<any>(this.URL +`update/${id}`, per )
 }

 public save(per : Persona): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', per);
}

public delete (id:number):Observable<any>{
  return this.httpClient.delete<any>(this.URL+`delete/${id}`);
}

}


