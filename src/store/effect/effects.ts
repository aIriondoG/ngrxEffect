import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as ac from '../action/action';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { user } from '../reducer/reducer';
import 'rxjs/Rx';
import { AuthProvider } from '../../providers/auth/auth';
import { exhaustMap, takeUntil, tap, mergeMap , map} from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operator/switchMap';

@Injectable()
export class efectos {
    constructor(private actions$: Actions, private service: AuthProvider) { }
    @Effect()
    login$: Observable<Action> = this.actions$.ofType<ac.Login>(ac.LOGIN)
    .pipe(
        map(action => action.payload),
        map(us => new ac.LoginSuccess(us))
    );
    
    @Effect()
    logout$: Observable<Action> = this.actions$.ofType<ac.Logout>(ac.LOGOUT)
    .pipe(
        map(action => action.payload),
        map(us => new ac.LogoutSuccess(us))
    );

    @Effect()
    update$: Observable<Action> = this.actions$.ofType<ac.Update>(ac.UPDATE)
    .pipe(
        map(action => action.payload),
        map(us => new ac.UpdatetSuccess(us))
    );

}

  
