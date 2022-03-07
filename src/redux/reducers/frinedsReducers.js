import { types } from "../types";

const initialState = {
    empty: true,
    friends: []
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addFirend:
            state = {
                empty: false,
                friends: action.payload
            }
            return state;
        case types.addOneFirend:
            const index =  state.friends.findIndex(friend=>friend._id === action.payload._id);
            console.log('index',index);
            state.friends[index] = action.payload;
            state.empty =  false;
            return {...state};
        default:
            return state;
    }
}
