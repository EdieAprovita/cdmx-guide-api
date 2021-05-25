const router = require('express').Router()

const {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
} = require('../controllers/auth')

const { protect } = require('../middleware/authMiddleware')

//AUTH ROUTES

router.get('/', protect, getUsers)
router.get('/profile', protect, getUserProfile)
router.get('/:id', protect, getUserById)
router.post('/signup', registerUser)
router.post('/login', authUser)
router.put('/profile/updateMe', protect, updateUserProfile)
router.put('/update/:id', protect, updateUser)
router.delete('/delete/:id', protect, deleteUser)

module.exports = router
