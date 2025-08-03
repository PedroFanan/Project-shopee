import mongoose from 'mongoose';

const pingSchema = new mongoose.Schema({
  message: String
});

export default mongoose.model('Ping', pingSchema);
