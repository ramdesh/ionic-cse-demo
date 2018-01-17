import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListStudentsPage } from '../pages/list-students/list-students';
import { CreateStudentPage } from '../pages/create-student/create-student';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { StudentService } from '../services/student-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListStudentsPage,
    CreateStudentPage,
    StudentDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListStudentsPage,
    CreateStudentPage,
    StudentDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StudentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
