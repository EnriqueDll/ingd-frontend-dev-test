const baseUrl = 'https://apiservices.medicatel.red/ApiTest/colaboradores';

export const getAssistants = () => {
    return fetch(baseUrl, {
		method: 'GET',
		headers: {
			'Authorization': 'Basic YXBpLVRlc3Q6SG9sYW11bmRv',
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
	}).then(data => data.json())
}