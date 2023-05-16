import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Skills[]= [];
 
  constructor(private Login : TokenService , private skillsService : SkillsService, private tokenService: TokenService) { }
  isAdmin:any;
  isLogged =false;
  ngOnInit(): void {
    this.getRol();
    this.chargeSkill();
     if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
      }
    }
chargeSkill():void{
  this.skillsService.lista().subscribe(data => { this.skills = data;})
  }
 delete(id? : number ){
  if(id != undefined){
  this.skillsService.delete(id).subscribe(
    data => {
      this.chargeSkill();
  }, err =>{
    alert("no se puede eliminar intente nuevamente o verifique sus permisos");
  }
  )}
 }
 getRol(){
  const rol: string [] =this.Login.getAuthorities();
  console.log('Autho',rol);
return (this.isAdmin=rol); }
}

