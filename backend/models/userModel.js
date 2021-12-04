import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
},
{timestamps: true})

const User = mongoose.model("User", userSchema)

export default User
