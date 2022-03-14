import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user : User = new User();
  submitted = false;
  submit : string = "Successful to save";
  addUser : any;

  constructor(
    private userService : UsersService,
    private route : Router
  ) { }

  ngOnInit(): void {

  }

  newUser() : void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.saveUser(this.user)
      .subscribe(result =>{
        console.log(result);
          this.user = new User();
          this.goToList();
      },
        error => {
          console.log(error)
          this.submitted = true;
          this.submit = "False to save"
        }
      )
  }

  onSubmit() {
    this.save();
    this.submitted = true;
    console.log(this.user)

  }

  goToList(){
    this.route.navigate(['/user'])
  }

}
