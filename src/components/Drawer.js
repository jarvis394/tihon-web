import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import HomeIcon from '@material-ui/icons/Home'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListIco from '@material-ui/icons/List'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { withStyles } from '@material-ui/core/styles'

import { DRAWER_WIDTH as drawerWidth } from '../config'

const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  toolbarContainer: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  }
})

function ListItemLink(props) {
  return (
    <ListItem button disableRipple component="a" {...props} />
  )
}

class DrawerComponent extends Component {
  render() {
    const { classes } = this.props
    
    return (
      <Drawer
        className={ classes.drawer }
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={ classes.toolbarContainer }>
          <div className={ classes.toolbar }>
            <Link className={ classes.title } href="/" variant="h6" color="inherit">
              tihon
            </Link>
            <Typography color="textSecondary" variant="caption">
              { `v4.9.0` }
            </Typography>
          </div>
        </div>
        <Divider />
        <List>

          { /* Home */}
          <ListItemLink href='/' key='home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Главная</ListItemText>
          </ListItemLink>

          { /* Commands */}
          <ListItemLink href='/commands' key='commands'>
            <ListItemIcon>
              <ListIco />
            </ListItemIcon>
            <ListItemText>Команды</ListItemText>
          </ListItemLink>

        </List>
      </Drawer>
    )
  }
}

export default withStyles(styles)(DrawerComponent)