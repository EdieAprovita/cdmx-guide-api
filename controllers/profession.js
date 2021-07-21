const Profession = require('../models/Profession')
const asyncHandler = require('express-async-handler')

//@des Fetch all professions
//@route GET /api/professions
//@access Public

exports.getAllProfessions = asyncHandler(async (req, res) => {
	try {
		const pageSize = 10
		const page = Number(req.query.pageNumber) || 1

		const keyword = req.query.pageNumber
			? {
					name: {
						$regex: req.query.keyword,
						$options: 'i',
					},
			  }
			: {}

		const count = await Profession.countDocuments({ ...keyword })
		const professions = await Profession.find({ ...keyword })
			.limit(pageSize)
			.skip(pageSize * (page - 1))

		res.status(200).json({ professions, page, pages: Math.ceil(count / pageSize) })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

//@des Fectch single profession
//@route GET /api/doctors/:id
//@access Public

exports.getProfession = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params
		const profession = await Profession.findById(id)
		res.status(200).json({ profession })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

//@des Create a profession
//@route POST /api/doctors/:id
//@access Private/Admin

exports.createProfession = asyncHandler(async (req, res) => {
	try {
		const { name, address, image, contact, numReviews } = req.body
		const profession = await Profession.create({
			name,
			address,
			image,
			contact,
			numReviews,
		})
		res.status(200).json({ profession })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

// @desc    Update a profession
// @route   PUT /api/doctors/:id
// @access  Private/Admin

exports.updateProfession = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params
		const { name, image, address, contact } = req.body
		const profession = await Profession.findByIdAndUpdate(id, {
			name,
			address,
			image,
			contact,
		})
		res.status(200).json({ profession })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

// @desc    Delete a profession
// @route   DELETE /api/doctors/:id
// @access  Private/Admin

exports.deleteProfession = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params
		await Profession.findByIdAndDelete(id)
		res.status(200).json({ message: 'Delete profession' })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

// @desc    Create new review
// @route   POST /api/doctors/:id/reviews
// @access  Private

exports.createProfessionReview = asyncHandler(async (req, res) => {
	try {
		const { rating, comment } = req.body
		const profession = await Profession.findById(req.params.id)

		if (profession) {
			const alreadyReviewed = profession.reviews.find(
				r => r.user.toString() === req.user._id.toString()
			)
			if (alreadyReviewed) {
				res.status(400)
				throw new Error('Profession already reviewed')
			}

			const review = {
				username: req.user.username,
				rating: Number(rating),
				comment,
				user: req.user._id,
			}

			profession.reviews.push(review)

			profession.numReviews = profession.reviews.length

			profession.rating =
				profession -
				reviews.reduce((acc, item) => item.rating + acc, 0) /
					profession.reviews.length

			await profession.save()
			res.status(201).json({ message: 'Review Added' })
		}
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

// @desc    Get top rated doctors
// @route   GET /api/doctors/top
// @access  Public

exports.getTopProfession = asyncHandler(async (req, res) => {
	try {
		const profession = await Profession.find({}).sort({ rating: -1 }).limit(3)
		res.status(200).json({ profession })
	} catch (error) {
		res.status(400).json({ message: `${error}`.red })
	}
})

