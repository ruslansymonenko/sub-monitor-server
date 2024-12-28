import { Schema, model } from 'mongoose';

const reminderSchema = new Schema({
  subscription: { type: Schema.Types.ObjectId, ref: 'Subscription', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  message: { type: String, required: true },
});

const Reminder = model('Reminder', reminderSchema);

export default Reminder;
