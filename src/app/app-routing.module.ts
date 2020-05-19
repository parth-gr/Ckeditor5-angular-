import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component';
import { HomeeditorComponent } from './homeeditor/homeeditor.component';
import { ChannelsComponent } from './channels/channels.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdmincontrolsComponent } from './admincontrols/admincontrols.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminchannelComponent } from './adminchannel/adminchannel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailchannelComponent } from './detailchannel/detailchannel.component';
import { EditorComponent } from './editor/editor.component';
import { EditorModule } from './editor/editor.module' ;
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'homeeditor',
    component: HomeeditorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'adminlogin',
    component: AdminComponent
  },
  {
    path: 'admincontrols',
    component: AdmincontrolsComponent
  },
  {
    path: 'adminusers',
    component: AdminusersComponent
  },
  {
    path: 'adminchannel',
    component: AdminchannelComponent
  },
  {
    path: 'channels',
    canActivate: [AuthGuard],
    component: ChannelsComponent
  },
  {
    path: 'channels/details',
    component: DetailchannelComponent,
    children : [
      { path: 'editor' , component: EditorComponent}
    ]
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }