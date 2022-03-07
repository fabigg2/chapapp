import {types} from '../types';

export const _succesMessage = (options) => ({
	type: types.succesMessage,
	payload: options
});
export const _errorMessage = (options) => ({
	type: types.erroMessage,
	payload: options
});

export const _deleteMessage = () => ({
	type: types.delteMessage
});