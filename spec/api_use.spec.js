const UserService = require('../api_use.js');

describe('User API', () => {
    it('Should get users', () => {
        UserService.getUsers().then((data) => {
            expect(data).toBeTruthy();
        });
    });
    
    it('should get all users...', () => {
		return UserService.getUsers()
			.then((data) => {
				expect(data).toBeTruthy()
				expect(Array.isArray(data)).toBe(true)
				expect(data[0].id).toBeDefined()
			})	
	})	

	it('should get one users...', () => {
		return UserService.getUser(1)
			.then((data) => {
				expect(data).toBeTruthy()
				expect(data.id).toBeDefined()
			})	
	})	
	
	it('should delete one users...', () => {
		return UserService.deleteUser(1)
			.then((data) => {
				expect(data).toBeTruthy()
				expect(data.id).not.toBeDefined()
			})	
	})	

	it('should add one user...', () => {
		const newUser = {
			'name': 'Pepe perez',
			'username': 'Bret',
			'email': 'Sincere@april.biz'}
		return UserService.postUser(newUser)
			.then((data) => {
				expect(data).toBeTruthy()
				expect(data.id).toBeDefined()
			})
			
	})

	it('should modify one user...', () => {
		const newUser = {
			'name': 'Pepe perez',
			'username': 'Bret',
			'email': 'Sincere@april.biz'}
		return UserService.patchUser(1, newUser)
			.then((data) => {
				expect(data).toBeTruthy()
				expect(data.id).toBe(1)
			})
			
	})
});
