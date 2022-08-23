import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users:any = [
    {
      id:"1",
      first:"Sayed",
      last:"sadat"
    },
    {
      id:"2",
      first:"Karim",
      last:"khan"
    },
  ];

  constructor() { }


  get getUsers(){
    return this.users;
  }

  addUser(event: any) {
    this.users.push(event);
  }

  setUser(user:any){
    // this.selectedUser = user;
  }

  getUserById(userId: any) {

      // let index = this.users.findIndex(userId);
      let index = this.users.findIndex((u:any) => u.id == userId);
      return this.users[index];



  }

  updateUser(value: any,userId:any) {
    let index = this.users.findIndex((u:any) => u.id == userId);
    this.users.splice(index,1);
    this.users.push(value);
  }

}
