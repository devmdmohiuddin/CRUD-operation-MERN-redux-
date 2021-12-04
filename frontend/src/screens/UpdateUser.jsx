import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { detailsUser, updateUser } from "../actions/userActions"

const UpdateUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const { user } = useSelector((state) => state.userDetails)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser(id, { name, email, message }))
    setName("")
    setEmail("")
    setMessage("")
  }

  useEffect(() => {
    if (!user?.name || user?._id !== id) {
      dispatch(detailsUser(id))
    } else {
      setName(user?.name)
      setEmail(user?.email)
      setMessage(user?.message)
    }
  }, [dispatch, id, user])

  return (
    <>
      <Link className="btn btn-primary mb-3" to="/user-list">All Usesrs</Link>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
            aria-describedby="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default UpdateUser
