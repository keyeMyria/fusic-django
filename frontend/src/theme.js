import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#404040',
    },
    secondary: {
      main: '#1db954',
    },
  },
});

console.log('using theme:', theme);
export default theme;
