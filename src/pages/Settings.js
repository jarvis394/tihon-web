import React, { Component } from 'react'
import { connect } from 'react-redux'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'
import { Container, Switch, Grid, Fade, Typography, Hidden } from '@material-ui/core'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  }
})

class Settings extends Component {
  componentWillMount() {
    this.props.handlePage('settings')
  }
  
  render() {
    const { classes, theme, language } = this.props
    
    return (
      <Fade in={true}>
        <Container>
          
          <Hidden mdUp>
            <Typography variant="h4">{ t('labels:SETTINGS') }</Typography>
          </Hidden>
          
          <Grid container>
            <Grid item sm={ 6 }>
              <Typography className={ classes.pos } paragraph>{ theme.palette.type }</Typography>
            </Grid>
            <Grid item sm={ 6 } align="right">
              <Switch
                value="checkedB"
                color="primary"
              />
            </Grid>
            <Typography paragraph>{ language }</Typography>
          </Grid>
          
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
})(withStyles(styles)(Settings))
