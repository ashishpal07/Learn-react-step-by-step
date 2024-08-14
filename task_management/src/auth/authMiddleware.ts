import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserRole } from "../enums/User";

export const authenticate = async (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({
      message: 'Invalid token.'
    })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY) as {userId: number, role: string};
    (req as any).userId = decode.userId;
    (req as any).role = decode.role;
    console.log("decode = ", decode)
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      message: "Invalid token!",
    })
  }
}

export const isAdmin = async (req: Request, res: Response, next: Function) => {
  const userRole = (req as any).role;
  if (userRole !== UserRole.ADMIN) {
    return res.status(401).json({
      message: "Access denied!",
    })
  } else {
    next();
  }
}