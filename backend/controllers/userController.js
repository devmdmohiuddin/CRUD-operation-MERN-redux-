import User from '../models/userModel.js'


const getUserById = async (req, res) => {
  const singleUser = await User.findById(req.params.id)
  res.status(200).json(singleUser)
}

const createUser = async (req, res) => {
  const { name, email, message } = req.body
  const user = new User({
    name, email, message
  })

  const createdUser = await user.save()
  res.status(201).json(createdUser)
}

const updateUser = async (req, res) => {
  const { name, email, message } = req.body
  
  const user = await User.findById(req.params.id)

  if (user) {

    user.name = name || user.name
    user.email = email || user.email
    user.message = message || user.message

    const updateddUser = await user.save()
  res.status(201).json(updateddUser)
  } else {
    res.status(400).json("User not found")
  }
}

const deleteUser = async (req, res) => {
  
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.status(200).json({
      message: "user delete"
    })
  } else {
    res.status(400).json("User not found")
  }
}

const allUsers = async (req, res) => {
  const allUsers = await User.find({})
  res.status(201).json(allUsers)
}

export { createUser, allUsers, updateUser, deleteUser, getUserById }

