import { combineReducers } from 'redux'

// Reducers
import commands from './commandsReducer'
import theme from './themeReducer'

export default combineReducers({
  commands,
  theme
})