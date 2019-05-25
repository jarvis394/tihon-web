import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import { Container, Grid, CircularProgress } from '@material-ui/core'

import Command from '../components/Command'

import { fetchCommands } from '../actions/commandsActions'

const styles = theme => ({
  content: {
    maxWidth: '1024px'
  },
  item: {
    width: '100%'
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 168px)'
  }
})

class Commands extends Component {
  componentWillMount() {
    this.props.dispatch(fetchCommands())
    this.props.handlePage('commands')
  }
  
  render() {
    const { commands, classes } = this.props
    
    if (commands.length !== 0) {
    return (
      <Container className={ classes.content }>
        <Grid container spacing={ 2 } className={ classes.content }>
          
          { commands && commands.map((c, i) => (
              <Grid className={ classes.item } key={ i } item sm={ 12 } md={ 6 }>
                <Command command={ c } key={ i } />
              </Grid>
            ))
          }
          
        </Grid>
      </Container>
    )}
    else return (<div className={ classes.progress }>
      <CircularProgress /></div>
      )
  }
}

export default connect(store => {
  return {
    commands: store.commands.commands
  }
})(withStyles(styles)(Commands))