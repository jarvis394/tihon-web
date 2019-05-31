import axios from 'axios'

import { API_URL } from '../config'

/**
 * Fetches commands list
 * 
 * @function
 * @returns {object}
 */
export const fetchCommands = () => {
  return (dispatch) => {
    axios.get(API_URL + '/cmdList')
      .then(res => dispatch({
        type: 'FETCH_COMMANDS_FULFILLED', 
        payload: res.data.commands
      }))
      .catch(e => dispatch({
        type: 'FETCH_COMMANDS_REJECTED',
        payload: e
      }))
  }
}
