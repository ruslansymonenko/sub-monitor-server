import User, { IUser } from '../models/User.js';
import bcrypt from 'bcrypt';

interface IUserData {
  username: string;
  email: string;
  password: string;
}

export class UserService {
  async register(data: IUserData): Promise<IUser> {
    const { username, email, password } = data;

    if (!username || !email || !password) {
      throw new Error('No user data!');
    }

    const isUserExists = await User.findOne({ $or: [{ username }, { email }] });
    if (isUserExists) {
      throw new Error(`User with email or username already exists`);
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    return user.save();
  }

  async login(data: IUserData): Promise<IUser> {
    const { username, email, password } = data;

    if (username || email) {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (!user) {
        throw new Error(`User with email or username already exists`);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Invalid password or user data.');
      }

      return user;
    } else {
      throw new Error('User does not exist');
    }
  }
}
