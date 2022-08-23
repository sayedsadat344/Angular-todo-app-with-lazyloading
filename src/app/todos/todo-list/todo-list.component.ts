import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos:any= [
    {id:"1", description:"Finisg the project as per the deadline, no excuses could be accepted."},
    {id:"2", description:"Study the interview questions and prepare for the interview as required."}
  ];

  todoForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.todoForm = this.fb.group({
      "description" : ['',Validators.required]
  });
  }


  submitTodo(){
    console.log("the form value",this.todoForm.value);
    let todo = this.todoForm.value;
    todo['id'] = this.todos.length + 1;
    this.todos.push(todo);
    this.todoForm.reset();

  }


  deleteTodo(id:any){
    let index = this.todos.findIndex((t:any) => t.id == id);
    index != -1 ? this.todos.splice(index,1):alert("No todo found");
  }
}
