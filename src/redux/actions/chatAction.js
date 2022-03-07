import { types } from "../types"

export const _chatAddMessage = (message)=>({
    type: types.chatAddMessage, 
    payload: message
});
export const _chatMessages = (messages)=>({
    type: types.chatMessages, 
    payload: messages
});

export const _chatEditMessage = (message)=>({
    type: types.chatEditeMessage, 
    payload: message
});
