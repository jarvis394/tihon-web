import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
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
})

class Settings extends Component {
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
    const { classes, theme, language } = this.props
    const type = theme.palette.type
    
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
            className={ classes.pos }>
            <ListItem 
              button 
              disableRipple 
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
              disableRipple 
              onClick={ this.changeLanguage.bind(this) }>
              <ListItemText 
                secondary={ languages.find(l => l.code === language).title } 
                primary={ t("settings:Language:title") } />
            </ListItem>
            <Divider />
          </List>
        </div>
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
