const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

module.exports = class UserService {
    static getUser(n) {
        return axios.get(url + '/' + n);
    }

    static getUsers() {
		return axios.get(url)
			.then(
				(response) => response.data)
	}

	static getUser(n) {
		return axios.get(url+'/'+n)
			.then(
				(response) => response.data)
	}

	static deleteUser(n) {
		return axios.delete(url+'/'+n)
			.then(
				(response) => response.data)
	}

	static postUser(data) {
		return axios.post(url, data)
			.then(
				(response) => response.data)
	}

	static patchUser(n, data) {
		return axios.patch(url+'/'+n, data)
			.then(
				(response) => response.data)
	}
}

module.exports = {}
module.exports.UserService = UserService
