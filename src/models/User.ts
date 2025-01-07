import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  subscriptions: mongoose.Types.ObjectId[];
}

const userSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subscriptions: [{ type: Schema.Types.ObjectId, ref: 'Subscription' }],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
