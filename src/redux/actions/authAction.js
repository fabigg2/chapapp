import {types} from '../types';

export const _login = (options) => ({
	type: types.logIn,
	payload: options
});

export const _logout = () => ({
	type: types.logOut
});