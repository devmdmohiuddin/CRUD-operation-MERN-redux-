import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'

const HomeScreen = () => {
  return (
    <>
      <h2>Create User</h2>
      <Link className="btn btn-primary my-5" to="user-list">All Users</Link>
      <Form/>
    </>
  )
}

export default HomeScreen
