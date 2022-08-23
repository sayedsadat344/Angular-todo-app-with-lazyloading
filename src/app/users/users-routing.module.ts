import { AddUsersComponent } from './add-users/add-users.component';
import { ErrorPageComponent } from './../core/error-page/error-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:UserListComponent,
    data:{title:"User lsit"}
  },
  {
    path:"add",
    component:AddUsersComponent
  },
  {
    path:":id/edit",
    component:AddUsersComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
