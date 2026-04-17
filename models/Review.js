import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  text: { type: String, required: true },
  rating: { type: Number, default: 5 },
  image: { type: String },
  approved: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
