import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skill : Skills;
  constructor(private skillService: SkillsService, private activatedRouter: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(data => { 
      this.skill = data;
    }, err =>{
      alert("error al actualizar intente nuevamente o revise sus permisos");
      this.router.navigate(['']);
    } )
  }
onEdit():void{
  const id = this.activatedRouter.snapshot.params['id'];
this.skillService.update(id, this.skill).subscribe( data => {
  alert("se a actualizado correctamente ");
  this.router.navigate(['']);
}, err => {
  alert("error al actualizar intente nuevamente o revise sus permisos");
  this.router.navigate(['']);
})
}

}
