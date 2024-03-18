import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyConquestComponent } from './my-conquest/my-conquest.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';

const routes: Routes = [
  {
     path: '',
     component: UsersComponent,
     pathMatch:'prefix',
     children: [
     {

      path: '',
      pathMatch: 'full',
      redirectTo:'myProfile'

     },
     {

      path: 'myProfile',
      component: MyProfileComponent,

     },
     {

      path: 'myconquest',
      component: MyConquestComponent,

     },
     {

      path: 'mydisciplines',
      component: MyDisciplinesComponent,

     }

] } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
