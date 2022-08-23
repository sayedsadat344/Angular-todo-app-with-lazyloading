import { ErrorPageComponent } from './core/error-page/error-page.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ShellComponent } from './core/shell/shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path:"",
        component:DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((u) => u.UsersModule),
      },
      {
        path: 'todos',
        loadChildren: () =>
          import('./todos/todos.module').then((t) => t.TodosModule),
      },
    ],
  },

  {
    path: '**',
    component:ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
