import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListStudentsPage } from './list-students';

@NgModule({
  declarations: [
    ListStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListStudentsPage),
  ],
})
export class ListStudentsPageModule {}
