import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {ActivePerfRecorder} from "@angular/compiler-cli/src/ngtsc/perf";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id : number;
  user : User;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private userService : UsersService
  ) {
    this.user = new User();
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
   this.userService.getUserById(this.id)
     .subscribe(result =>{
       console.log(result);
       this.user = result;
     }, error => {
       console.log(error);
       }
     )
  }

  list(){
    this.router.navigate(['user'])
  }

}
