import React, { Component } from 'react'

import { Typography } from '@material-ui/core'

class Home extends Component {
  componentWillMount() {
    this.props.handlePage('home')
  }
  
  render() {
    return (
      <div className="Home container">
        
        <Typography variant="h3">Home</Typography>
        
      </div>
    )
  }
}

export default Home