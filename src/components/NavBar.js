import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LightbulbFull from '@material-ui/docs/svgIcons/LightbulbFull'
import LightbulbOutline from '@material-ui/docs/svgIcons/LightbulbOutline'

import { setPaletteType } from '../actions/themeActions'

import DrawerComponent from './Drawer'

import { DRAWER_WIDTH as drawerWidth } from '../config'

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
    marginRight: theme.spacing(2),
  }
})

class NavBar extends Component {
  changeTheme() {
    let t = this.props.theme.palette.type === 'light' ? 'dark' : 'light'
    this.props.dispatch(setPaletteType(t))
  }
  
  render() {
    const { classes, page, theme } = this.props
  
    return (
      <div className={ classes.root }>  
        <DrawerComponent />
        <AppBar className={ classes.appBar } position="fixed">
          <Toolbar>
            <Typography variant="h6" className={ classes.title }>
              { page[0].toUpperCase() + page.slice(1, page.length) }
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
            <Button 
              className={ classes.button } 
              color="inherit"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default connect(store => {
  return {
    theme: store.theme
  }
})(withStyles(styles)(NavBar))