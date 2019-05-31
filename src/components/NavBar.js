import React, { Component } from 'react'
import { connect } from 'react-redux'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import ProfileIcon from '@material-ui/icons/PersonRounded'
import LightbulbFull from '@material-ui/docs/svgIcons/LightbulbFull'
import LightbulbOutline from '@material-ui/docs/svgIcons/LightbulbOutline'
import LanguageIcon from '@material-ui/icons/Language'
import Divider from '@material-ui/core/Divider'
import { Menu, MenuItem } from '@material-ui/core'

import { setPaletteType } from '../actions/themeActions'
import { changeLanguage } from '../actions/languageActions'

import DrawerComponent from './Drawer'

import { DRAWER_WIDTH as drawerWidth, languages } from '../config'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  button: {
    marginRight: theme.spacing(0),
  }
})

class NavBar extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      languageMenu: null,
      profileMenu: null
    }
  }
  
  handleLanguageIconClick(event) {
    this.setState({ languageMenu: event.currentTarget })
  }

  handleLanguageMenuClose() {
    this.setState({ languageMenu: null })
  }
  
  handleLanguageMenuClick(lang) {
    this.props.dispatch(changeLanguage(lang))
    this.handleLanguageMenuClose()
  }
  
  handleProfileIconClick(event) {
    if (this.props.profile) {
      this.setState({ profileMenu: event.currentTarget })
    } else {
      this.props.history.push('/profile')
    }
  }
  
  handleProfileMenuClose() {
    this.setState({ profileMenu: null })
  }

  changeTheme() {
    let t = this.props.theme.palette.type === 'light' ? 'dark' : 'light'
    this.props.dispatch(setPaletteType(t))
  }
  
  render() {
    const { classes, page, theme, lang: userLanguage, profile } = this.props
    const { languageMenu, profileMenu } = this.state
    
    return (
      <div className={ classes.root }>  
        <DrawerComponent page={ page } />
        
        <AppBar className={ classes.appBar } position="fixed">
          <Toolbar>
            <Typography variant="h6" className={ classes.title }>
              { t('labels:' + page.toUpperCase()) }
            </Typography>
            <IconButton 
              edge="end" 
              onClick={ this.changeTheme.bind(this) } 
              className={ classes.button } 
              color="inherit" 
              aria-label="Change theme"
            >
              { theme.palette.type === 'light' ? <LightbulbFull /> : <LightbulbOutline /> }
            </IconButton>
            <IconButton
              edge="end" 
              onClick={ this.handleLanguageIconClick.bind(this) } 
              className={ classes.button } 
              color="inherit" 
              aria-label="Change theme"
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              id="language-menu"
              anchorEl={ languageMenu }
              open={ Boolean(languageMenu) }
              onClose={ this.handleLanguageMenuClose.bind(this) }
            >
              { languages.map(language => (
                <MenuItem
                  data-no-link="true"
                  key={ language.code }
                  selected={ userLanguage === language.code }
                  onClick={ this.handleLanguageMenuClick.bind(this, language.code) }
                >
                  {language.title}
                </MenuItem>
              )) }
            </Menu>
            <IconButton
              edge="end" 
              onClick={ this.handleProfileIconClick.bind(this) } 
              className={ classes.button } 
              color="inherit" 
              aria-label="Profile"
            >
              <ProfileIcon />
            </IconButton>
            { profile && (
              <Menu
                id="profile-menu"
                anchorEl={ profileMenu }
                open={ Boolean(profileMenu) }
                onClose={ this.handleProfileMenuClose.bind(this) }>
                <MenuItem
                  data-no-link="false"
                  onClick={ () => this.props.history.push('/profile') }>
                  <Avatar style={{ marginRight: 16, marginTop: 4, marginBottom: 4 }}>NS</Avatar>
                  Name Surname
                </MenuItem>
                <Divider />
                <MenuItem
                  data-no-link="true"
                  onClick={ () => this.props.history.push('/logout') }>
                  Logout
                </MenuItem>
              </Menu>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default connect(store => {
  return {
    theme: store.theme,
    lang: store.language,
    profile: store.profile
  }
})(withStyles(styles)(NavBar))