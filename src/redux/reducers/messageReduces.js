import { types } from "../types";

const initialState = {
    type: '',
    msg: ''
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.succesMessage:
            state = {
                type: 'success',
                msg: action.payload
            }
            return state;
        case types.erroMessage:
            state = {
                type: 'error',
                msg: action.payload
            }
            return state;
        case types.delteMessage:
            return initialState;
        default:
            return state;
    }
}
