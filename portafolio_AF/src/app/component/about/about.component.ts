import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona.model';

import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit { 
persona :Persona = null
constructor(public personaService: PersonaService) {  }
ngOnInit(){
  this.cargaP();
  console.log(this.persona)
}
cargaP(){
  this.personaService.detail(1).subscribe(data => { this.persona = data; console.log(this.persona)});
}

  

}
