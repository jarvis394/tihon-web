const TAG = 'PROFILE_'

const getLocalProfileData = () => JSON.parse(localStorage.getItem('profile'))
const setLocalProfileData = (data) => localStorage.setItem('profile', JSON.stringify(data))
const removeLocalProfileData = () => localStorage.removeItem('profile')

let data = getLocalProfileData()

/**
 * Profile reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = data, action) {
  switch (action.type) {
    case TAG + 'LOCALDATA_SET': {
      state = action.payload
      setLocalProfileData(action.payload)
      
      return state
    }
      
    case TAG + 'LOCALDATA_REMOVE': {
      state = null
      removeLocalProfileData(action.payload)
      
      return state
    }
      
    case 'DATA_FETCH': {
      return { 
        ...state,
        data: {
          ...state.data,
          fetching: true
        }
      }
    }
      
    case 'DATA_FETCH_FULFILLED': {
      return {
        ...state,
        data: {
          ...state.data,
          data: action.payload,
          fetched: true,
          fetching: false
        }
      }
    }
      
    case 'DATA_FETCH_REJECTED': {
      return {
        ...state,
        data: {
          ...state.data,
          error: action.payload
        }
      }
    }
    
    default: return state
  }
}
