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


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
        //Placing a $ at the end of the variable means this is RxJs observable
        const interval$ = timer(3000, 1000); //Define the stream time interval. 

        // //By subscribing to the definition, will result in a stream of number values that emit every 1 second
        interval$.subscribe(val => {
            console.log(`Stream 1 => ${val}`);
        });

        // interval$.subscribe(val => {
        //     console.log(`Stream 22 => ${val}`);
        // });
        const click$ = fromEvent(document, 'click');

        click$.subscribe(e => console.log(e));
    }

  
}






