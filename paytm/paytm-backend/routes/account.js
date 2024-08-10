const express = require("express")
const router = express.Router()
const accountController = require("../controllers/account")
const { authMiddleware } = require("../middlewares/authMiddleware")

router.get("/balance", authMiddleware, accountController.getBalance)
router.post("/transfer", authMiddleware, accountController.transferMoney)

module.exports = router
