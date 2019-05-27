import React, { Component } from 'react'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'

import { Paper, BottomNavigation, BottomNavigationAction } from '@material-ui/core'

import { withRouter } from 'react-router-dom'

import { routes } from '../config'

const styles = theme => ({
  root: {
    position: 'fixed !important',
    bottom: '0 !important',
    width: '100%'
  },
})

const BottomNavLink = props => {
  const { name, icon } = props.item
  
  return <BottomNavigationAction label={ t('labels' + name.toUpperCase()) } value={ name } icon={ icon } />
}

class BottomNav extends Component {
  handleChange(event, newValue) {
    this.props.history.push('/' + routes[newValue].path)
  }

  render() {
    const { classes, page } = this.props

    return (
      <Paper elevation={ 2 } className={ classes.root }>
        <BottomNavigation value={ page } onChange={ this.handleChange.bind(this) }>
          
          { routes.map(r => (
              <BottomNavLink item={ r } key={ r.name } />
            ))
          }
          
        </BottomNavigation>
      </Paper>
    )
  }
}

export default withRouter(withStyles(styles)(BottomNav))