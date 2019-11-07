import { ofType } from 'redux-observable';
import { mergeMap, switchMap, map, filter, catchError } from 'rxjs/operators';
import { merge, of } from 'rxjs'
import * as actionTypes from '../../actions/actionTypes'


const fetchInvitationsUrl = "https://muapi2.starsellersworld.com/business_solution/invitation/097e35e28ef2463f89b8d7f09f62b7d0"
const fetchCountriesUrl = "https://muapi2.starsellersworld.com/business_solution/countrylist"
export const fetchInvitation = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.LOAD_INVITATION),
    switchMap(action => retrieveViaAjax(state$.value.loadToken.token, fetchInvitationsUrl).pipe(
        switchMap(response => of({
            ...response,
        })),
        mergeMap(result => {
            return merge(
            of({
                type: actionTypes.LOAD_INVITATION_SUCCESS,
                result: result.response
            }),
            of({
                type: actionTypes.LOAD_COUNTRIES
            })
        )
        }),
        catchError(error => {
            if(error.xhr.response) {
                return merge(
                    of({
                        type: actionTypes.ERROR
                    }),
                )
            }
        }
        )
    ))
);

export const loadCountries = (action$, state$, { retrieveViaAjax }) => action$.pipe(
    ofType(actionTypes.LOAD_COUNTRIES),
    switchMap(action => retrieveViaAjax(state$.value.loadToken.token, fetchCountriesUrl).pipe(
        switchMap(response => of({
            ...response,
        })),
        mergeMap(result => {
            return merge(
            of({
                type: actionTypes.LOAD_COUNTRIES_SUCCESS,
                result: result.response
            })
        )
        }),
        catchError(error => {
            if(error.xhr.response) {
                return merge(
                    of({
                        type: actionTypes.ERROR
                    }),
                )
            }
        }
        )
    ))
);