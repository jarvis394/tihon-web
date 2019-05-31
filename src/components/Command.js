import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'

const styles = theme => ({
  card: {
    height: '100% !important',
  },
  pos: {
    marginBottom: theme.spacing(2)
  },
  title: {
    marginBottom: theme.spacing(1)
  }
})

class Command extends Component {
  render() {
    const { command, classes, lang } = this.props
    
    return (
      <Card elevation={ 2 } className={ "Commands " +  classes.card }>
        <CardContent style={{ height: '100% !important' }}>
          
          <Typography gutterBottom color="textSecondary">
            { command.group }
          </Typography>
          
          <Typography variant="h5" className={ classes.title }>
            { '/' + command.name }
          </Typography>
          
          { command.alias && <Typography className={ classes.pos } color="textSecondary">
            { command.alias.join(', ') }
          </Typography> }
          
          <Typography variant="body1">
            { command.description[lang] }
          </Typography>
          
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Command)