const express = require('express')
const router = express.Router()

const {
	getAllMarkets,
	getMarketById,
	createMarket,
	updateMarket,
	deleteMarket,
	createMarketReview,
	getTopMarkets,
} = require('../controllers/markets')

const { protect } = require('../middleware/authMiddleware')

//CRUD MARKETS

router.get('/', getAllMarkets)
router.get('/:id', getMarketById)
router.get('/top', getTopMarkets)
router.post('/:id/reviews', protect, createMarketReview)
router.post('/create', protect, createMarket)
router.put('/edit/:id', protect, updateMarket)
router.delete('/delete/:id', protect, deleteMarket)

module.exports = router
