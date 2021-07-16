const router = require('express').Router()

const {
	getAllDoctors,
	getDoctorById,
	createDoctor,
	updateDoctor,
	deleteDoctor,
	createDoctorReview,
	getTopDoctor,
} = require('../controllers/doctors')

const { protect } = require('../middleware/authMiddleware')

//CRUD DOCTOR

router.get('/', getAllDoctors)
router.get('/top', getTopDoctor)
router.get('/:id', getDoctorById)
router.post('/create', protect, createDoctor)
router.post('/:id/reviews', protect, createDoctorReview)
router.put('/edit/:id', protect, updateDoctor)
router.delete('/delete/:id', protect, deleteDoctor)

module.exports = router
