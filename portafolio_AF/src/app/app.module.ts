import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EducationComponent } from './component/education/education.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ProjectComponent } from './component/project/project.component';
import { BannerComponent } from './component/banner/banner.component';
import { SkillsComponent } from './component/skills/skills.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './component/login/new-user.component'; 
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienceComponent } from './component/experience/new-experience.component';
import { EditExperienceComponent } from './component/experience/edit-experience.component';
import { EditProjectsComponent } from './component/project/edit-projects.component';
import { NewProjectComponent } from './component/project/new-project.component';
import { EditSkillsComponent } from './component/skills/edit-skills.component';
import { NewSkillComponent } from './component/skills/new-skill.component';
import { EditEducationComponent } from './component/education/edit-education.component';
import { NewEducationComponent } from './component/education/new-education.component';
import { EditAboutComponent } from './component/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app////';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectComponent,
    BannerComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    EditProjectsComponent,
    NewProjectComponent,
    EditSkillsComponent,
    NewSkillComponent,
    EditEducationComponent,
    NewEducationComponent,
    EditAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    NgbModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
