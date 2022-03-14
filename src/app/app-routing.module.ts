import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from "./component/create-user/create-user.component";
import {UserListComponent} from "./component/user-list/user-list.component";
import {UserDetailsComponent} from "./component/user-details/user-details.component";
import {UpdateUserComponent} from "./component/update-user/update-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
