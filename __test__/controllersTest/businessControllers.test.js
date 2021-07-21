const businessControllers = require('../../controllers/business');

describe('businessControllers', () => {
	test('getAllBusiness should return a list of all business', () => {
		let result = businessControllers.getAllBusiness();
		expect(result).toBeDefined();
	});

	test('getBusiness', () => {
		let result = businessControllers.getBusiness(1);
		expect(result).toBeDefined();
	});

	test('createBusiness should create a new business', () => {
		let result = businessControllers.createBusiness(1, 'test');
		expect(result).toBeDefined();
	});

	test('updateBusiness should update a business', () => {
		let result = businessControllers.updateBusiness(1, 'test');
		expect(result).toBeDefined();
	});

	test('deleteBusiness should delete a business', () => {
		let result = businessControllers.deleteBusiness(1);
		expect(result).toBeDefined();
	});
});
