import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateStudentPage } from './create-student';

@NgModule({
  declarations: [
    CreateStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateStudentPage),
  ],
})
export class CreateStudentPageModule {}
