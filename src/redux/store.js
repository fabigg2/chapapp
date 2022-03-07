import { chatReducer } from './reducers/chatReducer';

const { createStore, combineReducers, compose, applyMiddleware } = require('redux');
const { authReducer } = require('./reducers/authReducer');
const { tempReducer } = require('./reducers/tempReducer');
const { frindReducer, friendReducer } = require('./reducers/frinedsReducers');
const { messageReducer } = require('./reducers/messageReduces');

const reducers = combineReducers({
    auth: authReducer,
    tmp: tempReducer,
    message: messageReducer,
    friends: friendReducer,
    chat: chatReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);
