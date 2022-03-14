import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {


  id : number;
  user : User;
  submit : string = 'Update successful';
  submitted = false;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private userService : UsersService
  ) {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.userService.getUserById(this.id)
      .subscribe(result =>{
        console.log(result);
        this.user = result;
      },
      error => {
        console.log(error)

      })
  }

  updateUser(){
    this.userService.updateUser(this.id, this.user)
      .subscribe(result =>{
        console.log(result);
        this.user = new User();

      },
        error => {
          console.log(error)
          this.submit = 'Fail to submit'
        })
  }

  onSubmit(){
    this.submitted = true;
    this.updateUser();
  }

  goToList(){
    this.router.navigate(['/user'])
  }
}
