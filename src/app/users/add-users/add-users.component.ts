import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  userId:any;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) {
    this.userId = this.route.snapshot.params['id'];



  }


  ngOnInit(): void {
  }


  addUser(event:any){
    console.log("the data",event);
    this.userService.addUser(event);
    this.router.navigate(["users"]);


  }
}


