import React, { Component } from 'react'
import { t } from 'i18next'

import { Fade, Link as LinkMUI, Typography, Container, Button, Divider } from '@material-ui/core'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  pos: {
    marginTop: theme.spacing(2)
  },
  home: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(12)
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    width: '100% !important'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  group: {
    marginTop: theme.spacing(4)
  },
  content: {
    marginTop: theme.spacing(12)
  },
  faqSection: {
    marginTop: theme.spacing(2)
  },
  faqText: {
    marginTop: theme.spacing(1)
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
          <Typography variant="h4">{ props.title }</Typography>
          <Divider className={ classes.divider } />
          { props.children }
        </div>
     )
   }
   
   const FAQSection = props => {
      return (
        <div className={ classes.faqSection }>
          <Typography variant="h6">{ t('home:FAQ' + props.n + ':title') }</Typography>
          <Typography paragraph className={ classes.faqText }>{ t('home:FAQ' + props.n + ':text') }</Typography>
        </div>
     )
   }
   
   const AboutSection = props => {
      return (
        <div className={ classes.about }>
          <Typography paragraph>{ t('home:About' + props.n + ':text') + ' ' }<LinkMUI href={ t('home:About' + props.n + ':link') }>{ t('home:About' + props.n + ':linkText') }</LinkMUI></Typography>
        </div>
     )
   }
    
    return (
      <Fade in={true}>
        <Container className={ classes.home }>
          
          <Typography variant="h3" align="center">{ t('home:Title') }</Typography>
          <Typography className={ classes.pos } color="textSecondary" align="center">{ t('home:Subtitle') }</Typography>
          
          <div className={ classes.pos + ' ' + classes.centered }>
            <Button component="a" href="https://vk.com/tihon_bot" color="primary" variant="outlined">начать</Button>
          </div>
          
          <div className={ classes.content }>
            <Group title={ t('home:UsageTitle') }>
              <Typography className={ classes.pos } paragraph>
                { t('home:UsageText1') }&nbsp;
                <LinkMUI href="https://vk.com/tihon_bot">
                  { t('home:UsageTextLink') }
                </LinkMUI>.&nbsp;
                { t('home:UsageText2') }
              </Typography>
            </Group>
  
            <Group title={ t('home:FAQTitle') }>
              <FAQSection n={ 1 } />
              <FAQSection n={ 2 } />
              <FAQSection n={ 3 } />
            </Group>
            
            <Group title={ t('home:AboutTitle') }>
              <AboutSection n={ 1 } />
              <AboutSection n={ 2 } />
              <AboutSection n={ 3 } />
            </Group>
          </div>
        </Container>
      </Fade>
    )
  }
}

export default withStyles(styles)(Home)