import { combineReducers } from 'redux'

// Reducers
import commands from './commandsReducer'
import theme from './themeReducer'
import language from './languageReducer'

export default combineReducers({
  commands,
  theme,
  language
})