import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-admincontrols',
  templateUrl: './admincontrols.component.html',
  styleUrls: ['./admincontrols.component.css']
})
export class AdmincontrolsComponent implements OnInit {

  constructor(private _authService: AuthService,
    private _router : Router) { }

  ngOnInit() {
  }

}
