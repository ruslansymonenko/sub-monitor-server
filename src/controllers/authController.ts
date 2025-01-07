import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/authService.js';

const userService = new UserService();

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userService.login({ username, email, password });

    const userWithoutPassword = {
      ...newUser.toObject(),
    };
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      message: 'You have successfully logged in',
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userService.register({ username, email, password });

    const userWithoutPassword = {
      ...newUser.toObject(),
    };
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      message: 'User registered successfully.',
      user: userWithoutPassword,
    });
  } catch (error) {
    next(error);
  }
};
