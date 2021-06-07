const router = require('express').Router()

const {
	getAllProfessions,
	getProfession,
	createProfession,
	updateProfession,
	deleteProfession,
	createProfessionReview,
	getTopProfession,
} = require('../controllers/profession')

const { protect } = require('../middleware/authMiddleware')

//CRUD PROFESSION

router.get('/', getAllProfessions)
router.get('/top', getTopProfession)
router.get('/:id', getProfession)
router.post('/create', protect, createProfession)
router.post('/:id/reviews', protect, createProfessionReview)
router.put('/edit/:id', protect, updateProfession)
router.delete('/delete/:id', protect, deleteProfession)

module.exports = router
