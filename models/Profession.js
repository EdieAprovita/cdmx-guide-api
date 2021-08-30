const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require('./Review')

const professionSchema = new Schema(
	{
		professionName: {
			type: String,
			required: [true, 'Please at your profession'],
		},

		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},

		industry: {
			type: String,
			required: [true, 'Please at your industry'],
			enum: [
				'Administrativo',
				'Finanzas',
				'Diseño',
				'Tecnologia',
				'Alimentos',
				'Servicios Generales',
				'Mercadotecnia',
				'Humanidades',
				'Educacion',
				'Ventas',
				'RH',
				'Ingenieria',
				'Transporte',
				'Seguros',
			],
		},

		contact: [
			{
				phone: {
					type: Number,
					require: [true, 'Write a phone number'],
					unique: [true, 'This phone number is already in use'],
				},

				email: {
					type: String,
					required: [true, 'Add email'],
					unique: [true, 'This email is already in use'],
				},

				linkedin: {
					type: String,
					unique: [true, 'This linkedin is already in use'],
				},
			},
		],

		reviews: [Review],

		rating: {
			type: Number,
			required: [true, 'Please add the rating'],
			default: 0,
		},

		numReviews: {
			type: Number,
			required: [true, 'Please add the number reviews'],
			default: 0,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = Profession = mongoose.model('Profession', professionSchema)
