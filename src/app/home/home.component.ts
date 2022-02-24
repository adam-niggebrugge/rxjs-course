import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Store} from '../common/store.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses: Course[];

    advancedCourses: Course[];


    constructor(private store:Store) {

    }

    ngOnInit() {

        const http$ = createHttpObservable('/courses')

        //Whenever you want to derive new observables from existing use the pipe
        const courses$ = http$
           .pipe(
               map(res => Object.values(res["payload"]) )
           )
         
           //will now take course and should output to console
         courses$.subscribe(
             courses => console.log(courses),
             () => {}, //or noop no operation, simple
             () => console.log('complete')
         );
    }    

}
