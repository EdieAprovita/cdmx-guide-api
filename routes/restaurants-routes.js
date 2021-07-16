const express = require('express')
const router = express.Router()

const {
	getAllRestaurants,
	getRestaurantById,
	createRestaurant,
	updateRestaurant,
	deleteRestaurant,
	getTopRestaurants,
	createRestaurantReview,
} = require('../controllers/restaurants')

const { protect } = require('../middleware/authMiddleware')

//CRUD RESTAURANTS

router.get('/', getAllRestaurants)
router.get('/:id', getRestaurantById)
router.get('/top', getTopRestaurants)
router.post('/:id/reviews', protect, createRestaurantReview)
router.post('/create', protect, createRestaurant)
router.put('/edit/:id', protect, updateRestaurant)
router.delete('/delete/:id', protect, deleteRestaurant)

module.exports = router
