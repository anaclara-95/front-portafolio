import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './component/about/edit-about.component';
import { EditEducationComponent } from './component/education/edit-education.component';
import { NewEducationComponent } from './component/education/new-education.component';
import { EditExperienceComponent } from './component/experience/edit-experience.component';
import { NewExperienceComponent } from './component/experience/new-experience.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditProjectsComponent } from './component/project/edit-projects.component';
import { NewProjectComponent } from './component/project/new-project.component';
import { EditSkillsComponent } from './component/skills/edit-skills.component';
import { NewSkillComponent } from './component/skills/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newExperience', component:NewExperienceComponent},
  {path:'editExperience/:id', component:EditExperienceComponent},
  {path:'newEducation', component:NewEducationComponent},
  {path:'editEducation/:id', component:EditEducationComponent},
  {path:'newSkill', component:NewSkillComponent},
  {path:'editSkill/:id', component:EditSkillsComponent},
  {path:'editAbout/:id', component:EditAboutComponent},
  //{path:'reg', component:RegisterComponent},
  {path:'EProj/:id', component:EditProjectsComponent},
  {path:'newProj', component:NewProjectComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
