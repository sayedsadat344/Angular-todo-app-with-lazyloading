import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    SingleTodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
