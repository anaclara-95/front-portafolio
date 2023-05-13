import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects.model';
import { ImageService } from 'src/app/service/image.service';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  proj: Projects;
  nameP: string='';
  descP: string='';
  urlcP:string='';
  urlpP:string='';
  imgP:string='';

  constructor(private projServ: ProjectsService, public imageServ :  ImageService,private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id =this.activatedRouter.snapshot.params['id'];
  }
   
  
  onCreate(): void {

    const proj = new Projects(this.nameP, this.descP, this.imgP = this.imageServ.url, this.urlcP, this.urlpP);
      this.projServ.save(proj).subscribe(data => {
      alert("the project is save");
      this.router.navigate(['']);
    }, err => {
      alert("save fail");
      this.router.navigate(['']);
    }
     
      )}
  uploadImg($event: any) {
    const id =this.activatedRouter.snapshot.params['id'];
    const name = "projecto_" + id;
    this.imageServ.uploadImg($event, name);
  }

}
