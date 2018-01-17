import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Student } from '../../data-models/Student';

/**
 * Generated class for the CreateStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-student',
  templateUrl: 'create-student.html',
})
export class CreateStudentPage {
  student: Student;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.student = new Student();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStudentPage');
  }
  submitStudent() {
    console.log(this.student);
  }

}
