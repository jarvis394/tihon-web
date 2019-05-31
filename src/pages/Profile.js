import React, { Component } from 'react'
import { connect } from 'react-redux'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'
import { Container, Fade, Typography, CircularProgress, Hidden, Button } from '@material-ui/core'

import ErrorBox from '../components/ErrorBox'

import { fetchUserData } from '../actions/profileActions'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  },
  mb2: {
    marginBottom: theme.spacing(2)
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 'calc(100vh - 168px)'
  },
  loginText: {
    marginBottom: theme.spacing(2),
    textAlign: 'center'
  }
})

const redirect = {
  client_id: 7002864,
  display: 'page',
  redirect_uri: 'https://tihon-web.glitch.me/verify',
  scope: 'offline',
  response_type: 'token',
  v: '5.95'
}

let REDIRECT_URL = 'https://oauth.vk.com/authorize?'
for (let k in redirect) {
  REDIRECT_URL += k + '=' + redirect[k] + '&'
}

const redirectToVKLogin = () => window.location.replace(REDIRECT_URL)

class Profile extends Component {
  componentWillMount() {
    this.props.handlePage('profile')
    
    if (this.props.profile && !this.props.profile.data.fetched) {
      this.props.dispatch(fetchUserData(this.props.profile.user_id))
    }
  }
  
  render() {
    const { classes, profile } = this.props

    if (!profile) return (
      <Fade in={ true }>
        <div className={ classes.centered }>
          <Typography className={ classes.loginText } paragraph>{ t('profile:NotLoggedIn') }</Typography>
          <Button variant="contained" color="primary" onClick={ redirectToVKLogin }>{ t('labels:LOGIN') }</Button> 
        </div>
      </Fade>
    )
    else if (profile.data.fetched) return (
      <Fade in={true}>
        <Container>
          
          <Hidden mdUp>
            <Typography className={ classes.mb2 } variant="h4">{ t('labels:PROFILE') }</Typography>
          </Hidden>

          <div>
            <Typography paragraph>{ profile.user_id }</Typography>
          </div>

        </Container>
      </Fade>
    )
    else if (profile.data.error) {
      return <ErrorBox error={ profile.data.error } />
    }
    else return (
      <div className={ classes.centered }>
        <CircularProgress />
      </div>
    )
  }
}

export default connect(store => {
  return {
    theme: store.theme,
    language: store.language,
    profile: store.profile
  }
})(withStyles(styles)(Profile))
