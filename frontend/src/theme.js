import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1db954',
    },
    contrastThreshold: 3,
  },
});

console.log('using theme:', theme);
export default theme;
