import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('form') userForm!: NgForm;
  @Output() newUser: EventEmitter<any>= new EventEmitter();
  @Input() userId:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userId?this.populateForm():'';
  }
  populateForm() {
    let user  = this.userService.getUserById(this.userId);
    setTimeout(() =>{
      this.userForm?.form.patchValue({
        'first':user.first,
        'last':user.last
      });
    },500);
  }

  submitForm(){
    this.userId?this.updateUser():this.addUser();
  }

  updateUser() {
    this.userService.updateUser(this.userForm.value,this.userId);
    this.router.navigate(['/users']);
  }

  addUser(){
    this.newUser.emit(this.userForm.value);
  }
}
