import React, { Component } from 'react'
import i18next from 'i18next'
import { connect } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"

import App from './App'

class Layout extends Component {
  constructor(props) {
    super(props)
    
    this.setLanguage = this.setLanguage.bind(this)
  }
  
  componentWillMount() {
    let userLanguage = this.props.lang
    
    this.setLanguage(userLanguage)
  }
  
  setLanguage(language) {
    i18next.init({
      lng: language,
      resources: require(`../locales/${language}.json`)
    })
  }
  
  render() {
    let { theme } = this.props
    
    return (
      <MuiThemeProvider theme={ createMuiTheme(theme) }>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default connect(store => {
  return {
    theme: store.theme,
    lang: store.language
  }
})(Layout)