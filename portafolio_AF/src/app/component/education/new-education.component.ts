import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  eduI: string='';
  eduDI: string='';
  eduDF: string='';
  eduT: string='';
  eduDesc: string='';

  constructor(private eduService: EducationService, private router:Router) { }

  ngOnInit(): void {
  }
onCreate(): void{
  const edu = new Education(this.eduI, this.eduDI, this.eduDF, this.eduT, this.eduDesc);
  this.eduService.save(edu).subscribe(data => {alert("la formación " + this.eduI + "ha sido creada exitósamente" );
  this.router.navigate(['']);
}, err =>{
  alert("creacion fallida, intente nuevamente o verifique sus permisos");
  this.router.navigate(['']);
} )
}

}
