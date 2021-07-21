const authControllers = require('../../controllers/auth');

describe('Auth Controllers', () => {
	test('AuthController.login()', () => {
		const req = {
			body: {
				email: 'test@email.com',
				password: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const login = authControllers.loginUser(req, res, next);
		expect(login).toBeDefined();
	});

	test('AuthController.registerUser', () => {
		const req = {
			body: {
				username: 'test',
				email: 'test@email.com',
				password: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const registerUser = authControllers.registerUser(req, res, next);
		expect(registerUser).toBeDefined();
	});

	test('AuthController.getUserProfile', () => {
		const req = {
			body: {
				user: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const getUserProfile = authControllers.getUserProfile(req, res, next);
		expect(getUserProfile).toBeDefined();
	});

	test('AuthController.updateUserProfile', () => {
		const req = {
			body: {
				user: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const updateUserProfile = authControllers.updateUserProfile(req, res, next);
		expect(updateUserProfile).toBeDefined();
	});

	test('AuthController.getUsers', async () => {
		const req = {
			body: {
				users: ['test', 'test2', 'test3'],
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const getUsers = authControllers.getUsers(req, res, next);
		expect(getUsers).toBeDefined();
	});

	test('AuthController.deleteUser', async () => {
		const req = {
			body: {
				user: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const deleteUser = authControllers.deleteUser(req, res, next);
		expect(deleteUser).toBeDefined();
	});

	test('AuthController.getUserById', async () => {
		const req = {
			body: {
				user: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const getUserById = authControllers.getUserById(req, res, next);

		expect(getUserById).toBeDefined();
	});

	test('AuthController.updateUser', async () => {
		const req = {
			body: {
				user: 'test',
			},
		};
		const res = {
			status: () => {
				return {
					send: () => {},
				};
			},
		};
		const next = () => {};
		const updateUser = authControllers.updateUser(req, res, next);
		expect(updateUser).toBeDefined();
	});
});
