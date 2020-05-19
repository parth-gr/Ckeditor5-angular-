import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-adminchannel',
  templateUrl: './adminchannel.component.html',
  styleUrls: ['./adminchannel.component.css']
})
export class AdminchannelComponent implements OnInit {

  channelData = {}
  constructor(private _auth: AuthService,
              private _router : Router) { }

  ngOnInit() {
  }
  addChannel() {
    
    this._auth.addChannel(this.channelData)
    .subscribe(
      res => {
        console.log(res)
        alert("Channel registered...")
        this._router.navigate(['/admincontrols'])
      },
      err => console.log(err)
    )      
  }

}
