import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    loadSpinner: true,
    fetchInvitationsResponse: {},
    invitationDetails: [],
    introTags: [],
    countriesResponse : [],
    chosenTags : []
};


export const customerForm = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.LOAD_INVITATION_SUCCESS):
            return {
                ...state,
                fetchInvitationsResponse: action.result,
                invitationDetails: (JSON.parse((action.result.data)[0].form_json)),
                introTags: (JSON.parse((action.result.data)[0].form_json)).introtags.split(",")
            }

        case actionTypes.LOAD_COUNTRIES_SUCCESS:
            return {
                ...state,
                countriesResponse : action.result.data
            }
        
        case (actionTypes.ADD_NEW_TAG):
            let introTags = state.introTags
            introTags.push(action.newTag)
            return {
                ...state,
                introTags: introTags
            }

        case (actionTypes.CHOOSE_TAGS):
            let chosenTags = state.chosenTags
            chosenTags.push(action.tag)

            return {
                ...state,
                chosenTags : chosenTags
            }

        default:
            return state;
    }
}

