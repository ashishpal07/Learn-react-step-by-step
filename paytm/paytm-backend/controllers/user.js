const User = require('../models/user')
const Account = require('../models/account')
const zod = require('zod')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// User schema
const signUpSchema = zod.object({
  email: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
})

module.exports.signUp = async (req, res) => {
  try {
    const body = req.body

    const { success } = signUpSchema.safeParse(body)
    if (!success) {
      return res.status(411).json({
        message: 'Email already taken / Invalid input'
      })
    }

    const user = await User.findOne({ email: body.email })
    if (user) {
      return res.status(411).json({
        message: 'Email already taken / Invalid input'
      })
    }

    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND))
    body.password = bcrypt.hashSync(body.password, salt)

    const createdUser = await User.create(body)

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET
    )

    await Account.create({
      userId: createdUser._id,
      balance: 1 + Math.random() * 10000
    })

    return res.status(201).json({
      message: 'User added successfully!',
      userId: createdUser._id,
      token: token,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: 'Something went wrong while signup user'
    })
  }
}

const signInSchema = zod.object({
  email: zod.string().email(),
  password: zod.string()
})

module.exports.signIn = async (req, res) => {
  try {
    const body = req.body
    const { success } = signInSchema.safeParse(body)
    if (!success) {
      return res.status(411).json({
        message: 'Invalid input passed.'
      })
    }

    const user = await User.findOne({ email: body.email })
    if (!user) {
      return res.status(404).json({
        message: 'User not found.'
      })
    }

    if (!bcrypt.compareSync(body.password, user.password)) {
      return res.status(400).json({
        message: 'Invalid email or password.'
      })
    }

    // const token = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   process.env.JWT_SECRET
    // )

    return res.status(200).json({
      message: 'Logged in successfully',
      // token: token
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: 'error while login.'
    })
  }
}

const updateUserSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
})

module.exports.updateUser = async (req, res) => {
  try {
    const { success } = updateUserSchema.safeParse(req.body)
    if (!success) {
      return res.status(411).json({
        message: 'Invalid inputs while update user.'
      })
    }

    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND))
    req.body.password = bcrypt.hashSync(req.body.password, salt)

    await User.findByIdAndUpdate(req.userId, req.body)
    return res.status(200).json({
      message: 'user updated successfully.'
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Internal server error while updating user.',
      error: err
    })
  }
}

module.exports.getUserFilter = async (req, res) => {
  try {
    const filter = req.query.filter || ""
    const allUsers = await User.find({
      $or: [
        { firstName: { $regex: filter } },
        { lastName: { $regex: filter } }
      ]
    })

    return res.status(200).json({
      message: 'user fetched successfully.',
      // allUsers,
      userList: allUsers.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        _id: user._id
      }))
    })
  } catch (err) {
    return res.status(200).json({
      message: 'Error while fetching users by filter',
      error: err
    })
  }
}
