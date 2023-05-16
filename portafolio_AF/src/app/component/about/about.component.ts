import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona.model';

import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit { 
persona :Persona = null
constructor(public personaService: PersonaService, private tokenService: TokenService) {  }
isLogged = false;
isAdmin:any;
ngOnInit(): void {
  this.getRol();
  this.chargePerson();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = true;
  }
}
chargePerson() {
  this.personaService.detail(1).subscribe(data => { this.persona = data });
}
getRol(){
  const rol: string [] =this.tokenService.getAuthorities();
  console.log('Autho',rol);
return (this.isAdmin=rol); }
}


  


