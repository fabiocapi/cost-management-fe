import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegistrationService } from '../services/login-registration.service';
import { User } from '../user/user';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user = new User();
  msg = "";
  constructor(private service : LoginRegistrationService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.service.loginUser(this.user).subscribe(
      response => {
        console.log(this.user);
        console.log("response recived");
        console.log(response);
        if(response){
          NavbarComponent.linkEnabled=true;
          this.router.navigate(['/loginsuccess']);
        }
        else
        {this.msg = "Email o Password errati";}
      },
      error => {
        console.log("exception occurred");
        this.msg = "inserisci correttamente Email e Password";
      }
    );
  }

  goToRegistration()
  {
    this.router.navigate(['/registration']);
  }

}
