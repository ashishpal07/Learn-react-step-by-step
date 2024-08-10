const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const { authMiddleware } = require('../middlewares/authMiddleware')

router.post('/sign-up', userController.signUp)
router.post('/sign-in', userController.signIn)
router.put('/update', authMiddleware, userController.updateUser)
router.get('/bulk', authMiddleware, userController.getUserFilter)

module.exports = router
