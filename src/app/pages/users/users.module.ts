import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyConquestComponent } from './my-conquest/my-conquest.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { UsersMaterialModule } from '@app/shared/materials/users-mat.module';
import { SharedModule } from '@app/shared/models/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UsersComponent,
    MyProfileComponent,
    MyConquestComponent,
    MyDisciplinesComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule,
    MatButtonModule,
    SharedModule
  ]
})
export class UsersModule { }
