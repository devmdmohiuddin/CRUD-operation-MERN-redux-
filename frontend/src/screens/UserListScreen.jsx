import { Link } from 'react-router-dom'
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { listUser, deleteUser } from '../actions/userActions'

const UserListScreen = () => {
  const dispatch = useDispatch()

  const {users} = useSelector(state => state.userList)

  useEffect(() => {
    dispatch(listUser())
  }, [dispatch])


  const handleDelete = (id) => {
    dispatch(deleteUser(id))
    window.location.reload(true, 500)
  }

  return (
    <>
    <Link className="btn btn-primary mb-3" to="/">Create user</Link>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Message</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.message}</td>
            <td>
            <Link to={`/update/${user._id}`} className="btn btn-success">
              <i className="fas fa-pen-alt"></i>
            </Link>
          </td>
          <td>
            <button onClick={() => handleDelete(user._id)}  className="btn btn-danger">
              <i className="fas fa-trash"></i>
            </button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default UserListScreen
