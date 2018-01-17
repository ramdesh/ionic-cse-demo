import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetailsPage } from './student-details';

@NgModule({
  declarations: [
    StudentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentDetailsPage),
  ],
})
export class StudentDetailsPageModule {}
