import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Student } from '../data-models/Student';


@Injectable()
export class StudentService {
    API_SERVICE_URL: string = 'https://cse-demo-c421c.firebaseio.com';

    constructor(private _http: HttpClient) {

    }

    createStudent(student: Student, index: number): Observable<Student> {
        return this._http.put<Student>(this.API_SERVICE_URL + '/students/' + index + '.json', student)
            .catch(this.handleError);
    }

    listStudents(): Observable<Student[]> {
        return this._http.get<Student[]>(this.API_SERVICE_URL + '/students.json')
            .catch(this.handleError);
    }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}