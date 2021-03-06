const express = require('express')
const router = express.Router()
const { 
	getCountry,
	getGlobal } = require('../../../events/jhu/global/confirmed')


router.get('/:country?', (req, res, next) => {
  const { date } = req.query
	const { country } = req.params

	if ( country ) {
		getCountry(country, date)
			.then(response => res.json(response))
			.catch(err => next(err))
	} else {
		getGlobal(date)
			.then(response => res.json(response))
			.catch(err => next(err))
	}
})

module.exports = router
