import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { setProfileData } from '../actions/profileActions'

import { Typography, Container } from '@material-ui/core'

class Verify extends Component {
  render() {
    let options = window.location.hash.slice(1).split('&')
    let data = {}
    
    for (let i in options) {
      let key = options[i].split('=')[0]
      let value = options[i].split('=')[1]
      data[key] = value
    }
    
    data.data = {
      fetched: false,
      fetching: false,
      error: null
    }
    
    this.props.dispatch(setProfileData(data))
    
    return (
      <Container>
        
        <Typography variant="h5">Verifying data...</Typography>
        <Redirect to="/profile" /> 
        
      </Container>
    )
  }
}

export default connect(store => {
  return {
    profile: store.profile
  }
})(Verify)
