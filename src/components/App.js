import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import NavBar from './NavBar'
import BottomNav from './BottomNav'

import { Home, Commands, Profile, Settings, NotFound } from '../pages'

import { Hidden } from '@material-ui/core'

import { DRAWER_WIDTH as drawerWidth } from '../config'

const styles = theme => ({
  content: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      paddingTop: theme.spacing(10),
    }
  },
})

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: 'home'
    }
    this.handlePage = this.handlePage.bind(this)
  }
  
  handlePage(p) {
    this.setState({ page: p })
  }
  
  render() {
    const { classes } = this.props
    
    return (
      <div className="App">
        
        { this.state.page !== 'notfound' && 
            <Hidden smDown>
              <NavBar page={ this.state.page } /> }
            </Hidden>
        }

        <div className={ classes.content }>
          <Switch>
            <Route exact path="/" render={ () => <Home handlePage={ this.handlePage } /> } />
            <Route path="/commands" render={ () => <Commands handlePage={ this.handlePage } /> } />
            <Route path="/settings" render={ () => <Settings handlePage={ this.handlePage } /> } />
            <Route path="/profile" render={ () => <Profile handlePage={ this.handlePage } /> } />
            
            <Route exact path="*" render={ () => <NotFound handlePage={ this.handlePage } /> } />
          </Switch>
        </div>
        
        { this.state.page !== 'notfound' && 
          <Hidden mdUp>
            <BottomNav history={ this.props.history } page={ this.state.page } />
          </Hidden>
        }
        
      </div>
    )
  }
}

export default withStyles(styles)(App)