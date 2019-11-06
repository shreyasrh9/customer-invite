import * as actionTypes from '../../actions/actionTypes'

export const loadToken = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOADTOKEN_SUCCESS:

            return { ...state, token: action.token, tokenAvailable: true }

        case actionTypes.LOADTOKEN_ERROR:
            return { ...state, token: null, tokenAvailable: false }

        default:
            return state;
    }
}
