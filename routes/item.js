const express = require('express')
const itemCtrl = require('../controllers/item')
const router = express.Router()
const Item = require('../models/item')


router.post('/', itemCtrl.creatingItem)

router.get('/', itemCtrl.getAllItems)

router.get('/:id', itemCtrl.getOneItem)

router.put('/:id', itemCtrl.updateItem)

router.delete('/:id', itemCtrl.deleteItem)





module.exports = router