import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Student } from '../../data-models/Student';
import { StudentService } from '../../services/student-service';

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
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private _studentService: StudentService
  ) {
      this.student = new Student();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStudentPage');
  }
  submitStudent() {
    console.log(this.student);
    this._studentService.listStudents()
        .subscribe(students => {
          let index = students.length;
          this._studentService.createStudent(this.student, index)
              .subscribe(createdStudent => {
                console.log(createdStudent);
              })
        })
  }

}
