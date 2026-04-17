import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  tags: [{ type: String }],
  live: { type: String }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
