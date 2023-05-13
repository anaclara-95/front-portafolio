import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLogged = false;


  constructor(private router:Router, private TokenService: TokenService) {}

  ngOnInit(): void {
    if(this.TokenService.getToken()) {
      this.isLogged = true;
      
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.TokenService.logOut();
    window.location.reload();
  }
  
  logIn(){
  this.router.navigate(['/login'])
 }

}

