import { blue, pink } from '@material-ui/core/colors'

let type = localStorage.getItem('theme')
if (!type) {
  localStorage.setItem('theme', 'light')
  type = 'light'
}

const theme = {
  palette: {
    type: type,
    primary:{
      main: blue.A400,
    },
    secondary: pink,
  }
}

export default theme