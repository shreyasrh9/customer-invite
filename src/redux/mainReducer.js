import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax'


const retrieveViaAjax = (token, url) => {
    return (
        ajax({
            url: url,
            crossDomain: true,
            method: 'GET',
            withCredentials: false,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            responseType: 'json'

        })
    )
};

const updateViaAjax = (token, url, data) => {
    return (
        ajax({
            url: url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },

            body: data
        })
    )
}

// #1
import { fetchInvitation, loadCountries} from './epics/customerForm'
import { customerForm } from  './reducers/customerForm'
import { loadToken } from './reducers/loginToken'

export const mainReducer = combineReducers({
    customerForm: customerForm,
    loadToken : loadToken
})

export const epics = (...args) => combineEpics(fetchInvitation, loadCountries)(...args, { ajax, retrieveViaAjax, updateViaAjax })
