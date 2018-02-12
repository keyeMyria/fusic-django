import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from 'material-ui/styles';

import BrowseItem from '../components/BrowseItem';
import Search from '../components/Search';
import Footer from '../components/Footer';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const ComponentsPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Search />
      <Footer />
      <BrowseItem />
    </div>
  );
};

ComponentsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComponentsPage);
