import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router : Router) { }

  ngOnInit() {
  }

  registerUser() {
    
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('fullname',res.fullname) // res.fullname ka fullname isliye bcz server k json object me key me fullname hai
        alert("User registered...")
        this._router.navigate(['/channels'])
      },
      err => console.log(err)
    )      
  }


}
