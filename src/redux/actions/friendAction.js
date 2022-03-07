import { types } from "../types"

export const _addFrind = (frinds)=>({
    type: types.addFirend, 
    payload:frinds 
});

export const _addOneFriend = (friend)=>({
    type: types.addOneFirend, 
    payload:friend 
});