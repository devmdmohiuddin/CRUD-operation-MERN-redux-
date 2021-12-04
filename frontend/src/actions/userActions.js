import axios from 'axios'
import { USER_CREATE_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from '../constants/userConstants'

export const createUser = (userObj) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CREATE_REQUEST
    })

    const {data} = await axios.post('/api/users', userObj)

    console.log(data)

    dispatch({
      type: USER_CREATE_SUCCESS,
      payload: data
    })

  } catch(error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload: error.message
    })
  }
}

export const listUser = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST
    })

    const {data} = await axios.get('/api/users')

    console.log(data)

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data
    })

  } catch(error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.message
    })
  }
}

export const detailsUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST
    })

    const { data } = await axios.get(`/api/users/${id}`)

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
    })

  } catch(error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.message
    })
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST
    })

    await axios.delete(`/api/users/${id}`)

    dispatch({
      type: USER_DELETE_SUCCESS,
    })

  } catch(error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.message
    })
  }
}

export const updateUser = (id, userObj) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST
    })

    const {data} = await axios.put(`/api/users/${id}`, userObj)

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data
    })

  } catch(error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.message
    })
  }
}