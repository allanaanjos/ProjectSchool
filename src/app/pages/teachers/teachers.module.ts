import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeachersMaterialModule } from '@app/shared/materials/teachers-mat.module';
import { SharedModule } from '@app/shared/models/shared/shared.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    TeachersMaterialModule
  ]
})
export class TeachersModule { }
