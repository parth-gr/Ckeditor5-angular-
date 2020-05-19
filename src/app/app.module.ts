import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from './editor/editor.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeeditorComponent } from './homeeditor/homeeditor.component';
import { ChannelsComponent } from './channels/channels.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { HomepgService } from './homepg.service';
import { AuthGuard } from './auth.guard';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AdminComponent } from './admin/admin.component';
import { AdmincontrolsComponent } from './admincontrols/admincontrols.component';
import { AdminchannelComponent } from './adminchannel/adminchannel.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { DetailchannelComponent } from './detailchannel/detailchannel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
@NgModule( {
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		HomeComponent,
		HomeeditorComponent,
		ChannelsComponent,
		AdminComponent,
		AdmincontrolsComponent,
		AdminchannelComponent,
		AdminusersComponent,
		DetailchannelComponent,
		PagenotfoundComponent,
	],
	imports: [
		BrowserModule,
		EditorModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule 
	],
	providers: [AuthService, HomepgService, AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokeninterceptorService,
			multi: true
		},
		{provide: APP_BASE_HREF, useValue: '/'}],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
