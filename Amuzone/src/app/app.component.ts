import { Component } from '@angular/core';
import { AuthentificationService } from './Services/authentification.service';
import { User } from './Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amuzone';
  credentials: User = {username: '', password: ''};
  isValid:any;


   test(){
        alert("vous etes bien sur la page d'accueil...");
  }

  constructor(private authentificationService: AuthentificationService){
    while(this.credentials.password == "" &&  this.credentials.username == ""){
        this.isValid = false;
    }
  }


}
