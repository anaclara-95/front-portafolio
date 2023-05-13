import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nameSk: string;
  porcS: string;


  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const skill = new Skills(this.nameSk, this.porcS);
    this.skillsService.save(skill).subscribe(data => {
      alert("la habilidad  " + this.nameSk + "se a creado exitosamente");
      this.router.navigate(['']);
    }, err => {
      alert("error al crear, intente nuevamente");
      this.router.navigate(['']);
    })
    
  }

}


