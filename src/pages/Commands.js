import React, { Component } from 'react'
import { connect } from 'react-redux'
// TODO: Virtualization
// import { FixedSizeList } from 'react-window'
import { t } from 'i18next'

import { withStyles } from '@material-ui/core/styles'
import { Fade, Container, Grid, CircularProgress, Typography, Hidden } from '@material-ui/core'

import Command from '../components/Command'
import ErrorBox from '../components/ErrorBox'

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
    if (this.props.commands.length === 0) {
      this.props.dispatch(fetchCommands())
    }
    
    this.props.handlePage('commands')
  }
  
  render() {
    const { commands, error, classes, language } = this.props
    
    if (commands.length !== 0 && !error) {
    return (
      <Fade in={ true }>
        <Container>
          <Hidden mdUp>
            <Typography variant="h4">{ t('labels:COMMANDS') }</Typography>
          </Hidden>
        
          <Typography className={ classes.pos } paragraph>{ t('commands:Text') }</Typography>
          
          <Grid container spacing={ 2 } className={ classes.grid }>
            
            { commands && commands.map((c, i) => (
                <Grid className={ classes.item } key={ i } item sm={ 12 } md={ 6 }>
                  <Command command={ c } lang={ language } key={ i } />
                </Grid>
              ))
            }
            
          </Grid>
        </Container>
      </Fade>
    )}
    else if (error) {
      return <ErrorBox error={ error } />
    }
    else return (
      <div className={ classes.progress }>
        <CircularProgress />
      </div>
    )
  }
}

export default connect(store => {
  return {
    error: store.commands.error,
    commands: store.commands.commands,
    language: store.language
  }
})(withStyles(styles)(Commands))