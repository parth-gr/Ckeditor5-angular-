import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData = {}
  constructor(private _authService: AuthService,
              private _router : Router) { }

  ngOnInit() {
  }
  adminLogin(){
    this._authService.adminLogin(this.adminData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        alert("Admin login success")
        this._router.navigate(['/admincontrols'])
      },
      err => console.log(err)
    )
  }


}

