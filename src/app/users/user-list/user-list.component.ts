import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users:any = []
  selectedUser: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers;
  }


/**
 *
 * @param id Delete a User by the id
 */
  deleteUser(id:any){
    let index = this.users.findIndex((u:any) => u.id == id);
    if(index != -1){
      this.users.splice(index,1);
    }else{
      alert("the User not found");
    }

  }

  openEditServiceModal(ser: any) {
    // // this._departmentService.setDepartmentId(this.depId);
    // const modalRef = this._modal.open(EditServiceComponent, { size: "lg" });
    // modalRef.componentInstance.service = ser;
    // modalRef.result.then(
    //   (result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   },
    //   (reason) => {}
    // );
  }


  editUser(user:any){

    this.selectedUser = user;
  }

}
