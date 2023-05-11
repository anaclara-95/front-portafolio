import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona} from '../model/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { } 

public lista(): Observable<Persona> {
  return this.http.get<Persona>(this.URL + 'lista');
}
public detail(id: number):Observable<Persona>{
 return this.http.get<Persona>(this.URL +`detail/${id}` )
}

}
