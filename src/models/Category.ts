import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true },
  subscriptions: [{ type: Schema.Types.ObjectId, ref: 'Subscription' }],
});

const Category = model('Category', categorySchema);

export default Category;
