import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LightbulbFull from '@material-ui/docs/svgIcons/LightbulbFull'
import LightbulbOutline from '@material-ui/docs/svgIcons/LightbulbOutline'

import { setPaletteType } from '../actions/themeActions'

import DrawerComponent from './Drawer'

const drawerWidth = 240
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
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
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              className={classes.menuButton}
              >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              { page }
            </Typography>
            <IconButton edge="end" onClick={ this.changeTheme.bind(this) } className={ classes.settingsButton } color="inherit" aria-label="Settings">
              { theme.palette.type === 'light' ? <LightbulbFull /> : <LightbulbOutline /> }
            </IconButton>
            <Button color="inherit">Login</Button>
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