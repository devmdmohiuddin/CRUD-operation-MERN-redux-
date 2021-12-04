import express from 'express'
import { allUsers, createUser, deleteUser, updateUser, getUserById } from "../controllers/userController.js"

const router = express.Router()

router.route("/").post(createUser).get(allUsers)
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser)

export default router