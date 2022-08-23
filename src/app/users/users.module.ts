import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
