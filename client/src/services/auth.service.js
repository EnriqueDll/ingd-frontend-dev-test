const baseUrl = 'https://apiservices.medicatel.red/ApiTest/login';

export const getUser = (credentials) => {
    return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Authorization': 'Basic YXBpLVRlc3Q6SG9sYW11bmRv',
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(credentials)
	}).then(data => data.json())
};