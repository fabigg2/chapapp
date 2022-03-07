import { types } from "../types";

const initialState = {

};

export const tempReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addTemp:
            state = {
                data: action.payload
            }
            return state;
        case types.delteTemp:
            return initialState
        default:
            return state;
    }
}
