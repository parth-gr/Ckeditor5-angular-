import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '../editor/editor.module';
import { FormsModule } from '@angular/forms';
import { ChannelsComponent } from './channels.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { AppRoutingModule } from '../app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { AuthGuard } from '../auth.guard';
import { TokeninterceptorService } from '../tokeninterceptor.service';
import { DetailchannelComponent } from '../detailchannel/detailchannel.component'
@NgModule( {
	declarations: [
		ChannelsComponent,	
		DetailchannelComponent,
	],
	imports: [
		BrowserModule,
		EditorModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule 
	],
	providers: [AuthService, AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokeninterceptorService,
			multi: true
		},
		{provide: APP_BASE_HREF, useValue: '/'}],
	bootstrap: [ ChannelsComponent ]
} )
export class AppModule { }
