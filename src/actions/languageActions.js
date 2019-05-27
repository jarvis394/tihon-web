
/**
 * Changes language
 * 
 * @function
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