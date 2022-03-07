import { types } from "../types";

const initialState = {
    logged: false,
    data: {}
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.logIn:
            state = {
                logged: true,
                data: action.payload
            }
            return state;
        case types.logOut:
            return initialState
        default:
            return state;
    }
}
