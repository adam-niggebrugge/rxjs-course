import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import { environment } from '../../environments/environment';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() {};

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






