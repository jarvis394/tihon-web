
/**
 * Fetching commands reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = {
  fetching: false,
  fetched: false, 
  error: null, 
  commands: []
}, action) {
  switch (action.type) {
    case 'FETCH_COMMANDS': {
      return { 
        ...state,
        fetching: true
      }
    }
    
    case 'FETCH_COMMANDS_FULFILLED': {
      return {
        ...state,
        fetched: true,
        fetching: false,
        commands: action.payload
      }
    }
    
    case 'FETCH_COMMANDS_REJECTED': {
      return {
        ...state,
        error: action.payload
      }
    }
    
    default: return state
  }
}
