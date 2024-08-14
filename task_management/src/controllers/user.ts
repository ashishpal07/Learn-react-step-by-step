import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entity/User'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import {z} from "zod";
import { UserRole } from '../enums/User'

const userRepository = AppDataSource.getRepository(User);

const userSchema = z.object({
  userName: z.string().email(),
  password: z.string().min(8),
  role: z.string(),
})

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {success} = userSchema.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Invalid input",
      });
    }

    const { userName, password, role } = req.body

    if (role && !Object.values(UserRole).includes(role)) {
      return res.status(400).json({ message: 'Invalid user role value' })
    }

    let userExist = await userRepository.findOneBy({ userName: userName })
    if (userExist) {
      return res.status(400).json({
        message: `User already exist with userName: ${userName}`
      })
    }

    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
      userName: userName,
      password: hashedPassword,
      role: role
    })
    await userRepository.save(user)

    return res.status(201).json({
      message: 'User registered successfully!'
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: 'Internal server error while registering user...'
    })
  }
}


const userLoginSchema = z.object({
  userName: z.string().email(),
  password: z.string().min(8),
})

export const loginUser = async (req: Request, res: Response) => {
  try {
    const {success} = userLoginSchema.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Invalid input",
      });
    }

    const { userName, password } = req.body

    const user = await userRepository.findOneBy({ userName: userName })
    if (!user) {
      return res.status(404).json({
        message: `User not found with userName ${userName}`
      })
    }

    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({
        message: 'Invalid credentials!'
      })
    }

    const token = sign(
      { userId: user.id, userName: userName, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '3h' }
    );

    return res.status(200).json({
      token: token
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error while login..."
    });
  }
}
