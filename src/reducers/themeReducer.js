import theme from '../theme'

/**
 * Theme reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = theme, action) {
  switch (action.type) {
    case 'THEME_PALETTE_TYPE_SET': {
      state.palette.type = action.payload
      
      return {
        ...state
      }
    }
    
    default: return state
  }
}
