import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { mainReducer, epics } from './mainReducer';

import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

const getCookieByName = (name) => {
    let namedCookie = document.cookie.split(';').find((coo)=> coo.split('=')[0].trim()==name)
    if(namedCookie) return namedCookie.split('=')[1];
    return undefined;
  }

const getInitialState = () => {
    
    let token = getCookieByName('token');

    if(token) {
        return {
            loadToken: {
                token : token,
                tokenAvailable: true
            }
        }
    } else {
        window.location.replace("http://www.starsellersworld.com");
    }
}

const initialState = getInitialState();

function configureStore() {
  const store = createStore(
    mainReducer,
    initialState,
        applyMiddleware(
            epicMiddleware,
            logger
        )
  );

  epicMiddleware.run(epics);

  return store;
}

export const store = configureStore();
