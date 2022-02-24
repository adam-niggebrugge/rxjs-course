import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';

export function createHttpObservable(url:string) {
    return Observable.create(observer => {
        
        fetch(environment.apiUrl+url)
        .then(response => {
            return response.json();
        })
        .then(body => {
            //We know we are getting back an object from the json() promise
            observer.next(body);
            //Want to end the stream after json body is returned
            observer.complete();
        })
        .catch(err => {
            //ensure that we respect the observable contract, if an error occurs like network issue
            observer.error(err);
        });

      });
}