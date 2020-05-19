import { Component, OnInit } from '@angular/core';
import { HomepgService } from '../homepg.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router , ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels = []
  constructor(private _homepgService: HomepgService,
              private _router: Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this._homepgService.getChannels()
      .subscribe(
        res => this.channels = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }
  onSelect(channel){
    this._router.navigate(['/channels' , 'details'],{queryParams : { channelId : channel.channelid }}) ;
  }

}
