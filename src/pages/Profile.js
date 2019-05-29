import React, { Component } from 'react'
import { connect } from 'react-redux'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'
import { Container, Fade, Typography, Hidden } from '@material-ui/core'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  }
})

class Profile extends Component {
  componentWillMount() {
    this.props.handlePage('profile')
  }
  
  render() {
    // const { classes, theme, language } = this.props
    
    return (
      <Fade in={true}>
        <Container>
          
          <Hidden mdUp>
            <Typography variant="h4">{ t('labels:PROFILE') }</Typography>
          </Hidden>
          

        </Container>
      </Fade>
    )
  }
}

export default connect(store => {
  return {
    theme: store.theme,
    language: store.language
  }
})(withStyles(styles)(Profile))
