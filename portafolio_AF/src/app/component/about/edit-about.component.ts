import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  persona : Persona;
  constructor(private perService: PersonaService, private activatedRouter: ActivatedRoute , private router: Router, public imageServ :ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['1'];
    this.perService.detail(1).subscribe(data => { 
     this.persona=data;
    },err =>{
      alert("error al actualizar los datos");
      this.router.navigate(['']);
    } )
  }
onEdit():void{
  const id = this.activatedRouter.snapshot.params['1'];
  this.persona.imgPer = this.imageServ.url;
this.perService.update(1, this.persona).subscribe(data => {
  alert("edicion exitosa");
  this.router.navigate(['']);
}, err => {
  alert("error al editar");
  this.router.navigate(['']);
})
}
uploadImg($event : any){
const id =this.activatedRouter.snapshot.params['1'];
const name = "perfil_"+ 1;
//this.imageServ.uploadImg($event, name);
}

}
