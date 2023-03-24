const express = require('express')
const router = express.Router()

router.get('/', require('./koreanIdol'))
router.use('/', require('./swagger'))
router.use('/koreanIdol', require('./koreanIdol'))

module.exports = router
