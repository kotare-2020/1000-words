export const ADD_TO_DATABASE = 'ADD_TO_DATABASE'

import { addRoundDataApi } from '../apis/apis'


export function addRoundData(data) {
    return {
        type: ADD_TO_DATABASE,
        data: data
    }
}

export function updateRoundData(data) {
    return dispatch => {
        // console.log(data)
        addRoundDataApi(data).then(() => {
            // console.log("data saved");
        })
    }
}