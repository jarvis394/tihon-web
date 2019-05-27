import i18next from 'i18next'

let lang = localStorage.getItem('lang')

if (!lang) {
  lang = 'ru'
  localStorage.setItem('lang', lang)
}

/**
 * Language reducer
 * 
 * @function
 * @returns {object}
 */
export default function reducer(state = lang, action) {
  switch (action.type) {
    case 'LANGUAGE_CHANGE': {
      state = action.payload
      localStorage.setItem('lang', action.payload)
      
      i18next.init({
        lng: action.payload,
        resources: require(`../locales/${action.payload}.json`)
      })
      
      return state
    }
    
    default: return state
  }
}
