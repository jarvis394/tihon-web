import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  withRouter
} from 'react-router'
import {
  t
} from 'i18next'

import {
  withStyles
} from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  Container,
  Divider,
  Switch,
  Fade,
  Typography,
  Hidden
} from '@material-ui/core'

import {
  setPaletteType
} from '../actions/themeActions'
import {
  changeLanguage
} from '../actions/languageActions'

import { languages } from '../config'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  },
  content: {
    maxWidth: 500,
    margin: "auto"
  },
  m1: {
    marginTop: theme.spacing(1)
  }
})

class Settings extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      languageMenu: null
    }
  }
  
  handleLanguageMenuOpen(event) {
    this.setState({ languageMenu: event.currentTarget })
  }

  handleLanguageMenuClose() {
    this.setState({ languageMenu: null })
  }
  
  handleLanguageMenuClick(lang) {
    this.props.dispatch(changeLanguage(lang))
    this.handleLanguageMenuClose()
  }
  
  componentWillMount() {
    this.props.handlePage('settings')
  }

  changeTheme() {
    let t = this.props.theme.palette.type === "light" ? "dark" : "light"
    this.props.dispatch(setPaletteType(t))
  }

  changeLanguage() {
    this.props.dispatch(changeLanguage("en"))
  }
  
  render() {
    const { classes, theme, profile, language: lang } = this.props
    const type = theme.palette.type
    const { languageMenu } = this.state
    
    return (
      <Fade in={true}>
        <div className={ classes.content }>
          <Container>
          
            <Hidden mdUp>
              <Typography variant="h4">{ t('labels:SETTINGS') }</Typography>
            </Hidden>

          </Container>
          
          <List 
            subheader={ <ListSubheader>{ t("labels:GENERAL") }</ListSubheader> } 
            className={ classes.m1 }>
            <ListItem 
              button 
              onClick={ this.changeTheme.bind(this) }>
              <ListItemText 
                secondary={ t("settings:Theme:" + type) } 
                primary={ t("settings:Theme:title") } />
              <Switch 
                checked={ type === "dark" }
                color="primary" />
            </ListItem>
            <Divider />

            <ListItem 
              button 
              onClick={ this.handleLanguageMenuOpen.bind(this) }>
              <ListItemText 
                secondary={ languages.find(l => l.code === lang).title } 
                primary={ t("settings:Language:title") } />
              
            </ListItem>
            <Divider />
          </List>
          
          <List 
            subheader={ <ListSubheader>{ t("labels:PROFILE") }</ListSubheader> } 
            className={ classes.m1 }>
            <ListItem 
              button 
              disabled={ !profile ? true : false}
              onClick={ () => this.props.history.push('/logout') }>
              <ListItemText 
                secondary={ t('settings:Profile:subtitle') } 
                primary={ t('settings:Profile:title') } />
            </ListItem>
            <Divider />
          </List>
          
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
              selected={ lang === language.code }
              onClick={ this.handleLanguageMenuClick.bind(this, language.code) }
            >
              {language.title}
            </MenuItem>
            )) 
          }
          </Menu>
        </div>
      </Fade>
    )
  }
}

export default withRouter(connect(store => {
  return {
    theme: store.theme,
    language: store.language,
    profile: store.profile
  }
})(withStyles(styles)(Settings)))
