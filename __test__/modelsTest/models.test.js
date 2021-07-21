const businessSchema = require('../../models/Business')
const doctorSchema = require('../../models/Doctor')
const marketSchema = require('../../models/Market')
const professionSchema = require('../../models/Profession')
const recipeSchema = require('../../models/Recipe')
const restaurantSchema = require('../../models/Restaurant')
const reviewSchema = require('../../models/Review')
const userSchema = require('../../models/User')

describe('Check Models', () => {
	test('Check Business schema should be defined', () => {
		expect(businessSchema).toBeDefined()
	})

	test('Check Doctor Schema should be defined', () => {
		expect(doctorSchema).toBeDefined()
	})

	test('Check Profession Schema should be defined', () => {
		expect(professionSchema).toBeDefined()
	})

	test('Check Recipe Schema should be defined', () => {
		expect(recipeSchema).toBeDefined()
	})

	test('Check Restaurant Schema should be defined', () => {
		expect(restaurantSchema).toBeDefined()
	})

	test('Check ReviewSchema should be defined', () => {
		expect(reviewSchema).toBeDefined()
	})

	test('Check Market Schema should be defined', () => {
		expect(marketSchema).toBeDefined()
	})

	test('Check UserSchema', () => {
		expect(userSchema).toBeDefined()
	})
})
