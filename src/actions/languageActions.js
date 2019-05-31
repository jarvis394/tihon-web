
/**
 * Changes language
 * 
 * @function
 * @param {string} lang - Language to change
 * @returns {object}
 */
export const changeLanguage = lang => {
  return (dispatch) => {
    dispatch({
      type: 'LANGUAGE_CHANGE',
      payload: lang
    })
  }
}