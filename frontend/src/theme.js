import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#181818',
    },
    secondary: {
      main: '#1db954',
    },
    contrastThreshold: 5,
  },
});

console.log('using theme:', theme);
export default theme;
