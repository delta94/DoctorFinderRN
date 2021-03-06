/**
 * Created by zack on 2018/3/14.
 */
import {BaseUrl} from './API'
import {DLogger} from './Utils';
// import {//LoginTools } from './UserTools';

const parseJSON = (response) => {
	if (response.status === 204 || response.status === 401) {
		return { status: response.status };
	}
	return response.json();
}

const checkStatus = (response) => {
	if (response.ok) {
		return response;
	}
	if(response.status === 401){
		//LoginTools.logOut();
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

const  request = (url, options) => {
	const requestUrl = `${BaseUrl}${url}`;
	DLogger(requestUrl + '\n')
	DLogger(JSON.stringify(options.body) + '\n')

	let token = (global.UserInfo.Token ? global.UserInfo.Token : '')
	return fetch(requestUrl, Object.assign({}, {
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			    'Authorization': "Bearer " + token,
				// 'X-Language': global.userSelectedLanguage === 'zh-tw' ? 'zh-tw' : 'zh-cn',
				// 'x-user-lon': (global.userRegion.lon + ''),
				// 'x-user-lat': (global.userRegion.lat + ''),
				// 'x-user-id' : global.userId ? global.userId + '' : '',
				// 'x-source' :'Globalbusiness.mono.App'
			},
	}, options))
		.then(checkStatus)
		.then(parseJSON)
		.then(data => {
			return data;
		})
		.catch(err => {
			throw err
		});
}

export const HTTP = {
	post: (url, param={}) => request(url, {
			body: JSON.stringify(param),
			method: 'POST',
		}),

	get: (url, param={}) => {
		let requestUrl = url;

		if (Object.keys(param).length > 0) {
			let paramsString = Object.keys(param)
			.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(param[k]))
			.join('&');
			requestUrl = requestUrl + '?' + paramsString
		}

		return request(requestUrl, {
			method: 'GET'
		})
	},

	put: (url, param={}) => request(url, {
		body: JSON.stringify(param),
		method: 'PUT',
	}),

	delete: (url, param={}) => request(url, {
		body: JSON.stringify(param),
		method: 'DELETE',
	}),
}
