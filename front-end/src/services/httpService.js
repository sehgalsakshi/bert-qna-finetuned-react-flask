import axios from 'axios';
import { store } from '../configuration/ConfigureStore';
import { showErrorPopup, toggleLoader } from '../redux/action/ErrorAction';

const { dispatch } = store;

var url = 'http://127.0.0.1:5000/'
export const get = async ({ api, params }) => {
	params = {
		headers: {}
	}
	try {
		let response = await axios.get(url + api, params);
		return response;
	}
	catch (err) {
		dispatch(toggleLoader(false))
		dispatch(showErrorPopup('We ran into some error while proccessing your request. Please try again later'))
		throw err;
	}
}

export const post = async ({ api, data }) => {
	let config = {
		headers: {}
	}
	try {
		let response = await axios.post(url + api, data, config);
		return response;
	}
	catch (err) {
		dispatch(toggleLoader(false))
		if (err && err.response.data) {
			dispatch(showErrorPopup(err.response.data, 'Error'))
		} else {
			dispatch(showErrorPopup('We ran into some error while proccessing your request. Please try again later'))
		}
		throw err;
	}
}