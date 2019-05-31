import axios from 'axios'
import { API_URL } from '../config'

const TAG = 'PROFILE_'

/**
 * Sets profile data
 * 
 * @function
 * @param {any} data - Data to set
 * @returns {object}
 */
export const setProfileData = (data) => {
  return (dispatch) => {
    dispatch({
      type: TAG + 'LOCALDATA_SET',
      payload: data
    })
  }
}

/**
 * Removes profile data
 * 
 * @function
 * @param {any} data - Data to set
 * @returns {object}
 */
export const removeProfileData = () => {
  return (dispatch) => {
    dispatch({
      type: TAG + 'LOCALDATA_REMOVE'
    })
  }
}

/**
 * Gets user data from backend
 * 
 * @function
 * @param {any} id - User's ID
 * @returns {object}
 */
export const fetchUserData = (id) => {
  return (dispatch) => {
    axios.get(API_URL + '/profile/' + id)
      .then(res => dispatch({
        type: 'DATA_FETCH_FULFILLED',
        payload: res.data
      }))
      .catch(e => dispatch({
        type: 'DATA_FETCH_REJECTED',
        payload: e
      }))
  }
}
