import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../data-models/Student';
import { StudentService } from '../../services/student-service';

/**
 * Generated class for the ListStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-students',
  templateUrl: 'list-students.html',
})
export class ListStudentsPage {

  students: Student[];
  showList: boolean;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private _studentService: StudentService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStudentsPage');
    this._studentService.listStudents()
        .subscribe(students => {
          this.students = students;
          this.showList = true;
        });
  }

}
