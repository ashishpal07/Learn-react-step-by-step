const mongoose = require('mongoose')
const Account = require('../models/account')

module.exports.getBalance = async (req, res) => {
  try {
    const userId = req.userId
    const account = await Account.findOne({ userId: userId })
    return res.status(200).json({
      message: 'balance fetched!',
      balance: account.balance
    })
  } catch (err) {
    return res.status(500).json({
      message: 'Internal server error while getting balance',
      error: err
    })
  }
}

module.exports.transferMoney = async (req, res) => {
  try {
    const session = await mongoose.startSession()

    session.startTransaction()
    const { amount, to } = req.body

    const account = await Account.findOne({ userId: req.userId }).session(
      session
    )

    console.log("account = ", account)

    if (!account || account.balance < amount) {
      await session.abortTransaction()
      return res.status(400).json({
        message: 'Insufficient balance'
      })
    }

    const toAccount = await Account.findOne({ userId: to }).session(session)

    if (!toAccount) {
      await session.abortTransaction()
      return res.status().json({
        message: 'Invalid account.'
      })
    }

    // perform balance transfer
    await Account.findOneAndUpdate(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session)

    await Account.findOneAndUpdate(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session)

    await session.commitTransaction()

    return res.status(200).json({
      message: 'Transaction successfully done!'
    })
  } catch (err) {
    console.log('err = ', err)
    return res.status(500).json({
      message: 'Internal server error while transferring balance',
      error: err
    })
  }
}
