const router = require('express').Router();

const {
	getAllBusinesses,
	getBusinessById,
	createBusiness,
	updateBusiness,
	deleteBusiness,
	createBusinessReview,
	getTopBusiness,
} = require('../controllers/business');

const { protect } = require('../middleware/authMiddleware');

//CRUD BUSINESS

router.get('/', getAllBusinesses);
router.get('/top', getTopBusiness);
router.get('/:id', getBusinessById);
router.post('/create', protect, createBusiness);
router.post('/:id/reviews', protect, createBusinessReview);
router.put('/edit/:id', protect, updateBusiness);
router.delete('/delete/:id', protect, deleteBusiness);

module.exports = router;
