import * as actionTypes from './actionTypes'

export function noAction() {
    return {
        type: actionTypes.NO_ACTION
    }
}

export function loadInvitations() {
    return {
        type: actionTypes.LOAD_INVITATION
    }
}

export function addTag(newTag) {
    return {
        type: actionTypes.ADD_NEW_TAG,
        newTag
    }
}

export function chooseTags(tag) {
    return {
        type : actionTypes.CHOOSE_TAGS,
        tag
    }
}