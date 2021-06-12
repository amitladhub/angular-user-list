import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserListComponent } from './components/user-list/user-list.component'
const routes: Routes = [
  { path: 'home', component: HowItWorksComponent },
  { path: 'user', component: UserListComponent },
  { path: 'updateuser/:id', component: UpdateUserComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HowItWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
