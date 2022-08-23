import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  @Input() todo:any;
  @Input() index:any;
  @Output() todoId:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  sendId(id:any){
    console.log("the todo is is:",id);
    this.todoId.emit(id);

  }

}
