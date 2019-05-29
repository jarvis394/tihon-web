import React, { Component } from 'react'
import { connect } from 'react-redux'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'
import { Fade, Container, Grid, CircularProgress, Typography, Hidden } from '@material-ui/core'

import Command from '../components/Command'

import { fetchCommands } from '../actions/commandsActions'

const styles = theme => ({
  grid: {
    marginTop: theme.spacing(2),
    maxWidth: '1024px',
    marginBottom: theme.spacing(10)
  },
  item: {
    width: '100%'
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 168px)'
  },
  pos: {
    marginTop: theme.spacing(2)
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
      <Fade in={ true }>
        <Container>
          <Hidden mdUp>
            <Typography variant="h4">{ t('labels:COMMANDS') }</Typography>
          </Hidden>
        
          <Typography className={ classes.pos } paragraph>Здесь представлены все доступные команды у бота</Typography>
          
          <Grid container spacing={ 2 } className={ classes.grid }>
            
            { commands && commands.map((c, i) => (
                <Grid className={ classes.item } key={ i } item sm={ 12 } md={ 6 }>
                  <Command command={ c } key={ i } />
                </Grid>
              ))
            }
            
          </Grid>
        </Container>
      </Fade>
    )}
    else return (
      <div className={ classes.progress }>
        <CircularProgress />
      </div>
    )
  }
}

export default connect(store => {
  return {
    commands: store.commands.commands
  }
})(withStyles(styles)(Commands))