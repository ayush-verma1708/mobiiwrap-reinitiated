import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ['Admin', 'Customer', 'Guest'],
      default: 'Customer',
    }, // Added role field
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    phoneNumber: String,
    dateJoined: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
