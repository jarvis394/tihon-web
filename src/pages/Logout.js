import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { removeProfileData } from '../actions/profileActions'

import { Typography, Container } from '@material-ui/core'

class Logout extends Component {
  render() {    
    this.props.dispatch(removeProfileData())
    
    return (
      <Container>
        
        <Typography variant="h5">Logging out...</Typography>
        <Redirect to="/profile" /> 
        
      </Container>
    )
  }
}

export default connect(store => {
  return {
    profile: store.profile
  }
})(Logout)
