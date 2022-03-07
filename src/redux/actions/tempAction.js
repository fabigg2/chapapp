import {types} from '../types';

export const _addTemp = (options) => ({
	type: types.addTemp,
	payload: options
});

export const _deleteTemp = () => ({
	type: types.delteTemp
});