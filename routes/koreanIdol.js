const express = require('express')
const router = express.Router()

const contactsController = require('../controllers/koreanIdol')

router.get('/', contactsController.getAll)

router.get('/:id', contactsController.getSingle)

router.post('/', contactsController.createKoreanIdol)

router.put('/:id', contactsController.updateKoreanIdol)

router.delete('/:id', contactsController.deleteKoreanIdol)

module.exports = router
