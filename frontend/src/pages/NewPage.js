import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import BrowseItem from '../components/BrowseItem';
import Footer from '../components/Footer';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

const NewPage = ({ classes, theme }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <BrowseItem />>
        </Grid>
        <Grid item xs={6}>
          <Typography>xs=6</Typography>
        </Grid>
      </Grid>

      <Footer className={classes.footer} />
    </div>
  );
};

NewPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPage);
