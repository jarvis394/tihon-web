import React, { Component } from 'react'
import { t } from 'i18next'

import { Link as LinkMUI, Typography, Container, Button, Divider } from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'
// import { Link } from 'react-router-dom'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  },
  home: {
    marginTop: theme.spacing(8)
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    width: '100% !important'
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  group: {
    marginTop: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(12)
  }
})

class Home extends Component {
  componentWillMount() {
    this.props.handlePage('home')
  }
  
  render() {
    const { classes } = this.props
    
    const Group = props => {
      return (
        <div className={ classes.group } key={ props.key }>
          <Typography variant="h4">{ props.children }</Typography>
          <Divider className={ classes.divider } />
        </div>
     )
   }
    
    return (
      <Container className={ classes.home }>
        
        <Typography variant="h3" align="center">{ t('home:Title') }</Typography>
        <Typography className={ classes.pos } color="textSecondary" align="center">{ t('home:Subtitle') }</Typography>
        
        <div className={ classes.pos + ' ' + classes.centered }>
          <Button component="a" href="https://vk.com/tihon_bot" color="primary" variant="outlined">начать</Button>
        </div>
        
        <div className={ classes.content }>
          <Group>{ t('home:UsageTitle') }</Group>
          
          <Typography className={ classes.pos } paragraph>{ t('home:UsageText1') } <LinkMUI href="https://vk.com/tihon_bot">{ t('home:UsageTextLink') }</LinkMUI>. { t('home:UsageText2') }</Typography>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(Home)