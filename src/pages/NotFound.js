import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'

class NotFound extends Component {
  componentWillMount() {
    this.props.handlePage('notfound')
  }
  
  render() {
    return (
      <div className="NotFound container">
        
        <Typography variant="h3">Seems like you've got into a wrong page...</Typography>
        
      </div>
    )
  }
}

export default NotFound
