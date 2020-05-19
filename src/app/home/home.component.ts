import { Component, OnInit } from '@angular/core';
import { HomepgService } from '../homepg.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _homepgService: HomepgService) { }
  homepg = []
  ngOnInit() {
    this._homepgService.getHomepg()
      .subscribe(
        res => this.homepg = res,
        err => console.log(err)
      )
  }

}
