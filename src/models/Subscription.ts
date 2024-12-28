import { Schema, model } from 'mongoose';

const subscriptionSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  status: {
    type: String,
    enum: ['active', 'inactive', 'cancelled'],
    default: 'active',
  },
  paymentPeriod: {
    type: String,
    enum: ['weekly', 'monthly', 'yearly'],
  },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Subscription = model('Subscription', subscriptionSchema);

export default Subscription;
