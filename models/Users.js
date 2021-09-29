const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
  },
  sessions: {
    type: [String],
    select: false,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  emailVerified: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
