import React, { Component } from 'react'
import { t } from 'i18next'

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import { DRAWER_WIDTH as drawerWidth, routes } from '../config'

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
    textDecoration: 'none',
    transition: '.09s'
  }
})

const ListItemLink = (props) => {
  const { path, name, icon } = props.item
  const { selected } = props
  
  return (
    <ListItem selected={ selected } button component={ Link } to={ '/' + path } >
      <ListItemIcon>
        { icon }
      </ListItemIcon>
      <ListItemText>{ t('labels:' + name.toUpperCase()) }</ListItemText>
    </ListItem>
  )
}

class DrawerComponent extends Component {
  render() {
    const { classes, page } = this.props
    
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
            <Link className={ classes.title } to="/" color="inherit">
              tihon
            </Link>
            <Typography color="textSecondary" variant="caption">
              { `v4.9.0` }
            </Typography>
          </div>
        </div>
        <Divider />
        <List>

          { routes.map(r => (
              <ListItemLink selected={ r.name === page } item={ r } key={ r.name } />
            ))
          }

        </List>
      </Drawer>
    )
  }
}

export default withStyles(styles)(DrawerComponent)