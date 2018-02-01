import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import RestoreIcon from 'material-ui-icons/Restore';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'space-between',
  },

  // the 3 main elements
  footerDetails: {
    flex: '0 0 20%',
    minWidth: 0,
    display: 'flex',
  },
  footerControls: {
    backgroundColor: 'green',
    flex: '0 0 50%',
  },
  footerSettings: {
    flex: '0 0 20%',
  },

  // footerDetails
  footerImg: {
    display: 'block',
    width: '64px',
    height: '64px',
    padding: '10px',
  },
  footerInfo: {
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  footerTitle: {
    whiteSpace: 'nowrap',
  },
  footerArtist: {
    whiteSpace: 'nowrap',
  },
});

const NewPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography>xs=12</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>xs=6</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>xs=6</Typography>
        </Grid>
      </Grid>

      <footer className={classes.footer}>
        <div className={classes.footerDetails}>
          <img
            className={classes.footerImg}
            src="https://i.pinimg.com/736x/f7/d8/07/f7d807c40002aa4139517a5ea22aab3a--best-album-art-top-albums.jpg"
          />
          <div className={classes.footerInfo}>
            <Typography type="title" className={classes.footerTitle}>
              Some really long title
            </Typography>
            <Typography type="subheading" className={classes.footerArtist}>
              An amazing artist
            </Typography>
          </div>
        </div>

        <div className={classes.footerControls}>Controls</div>
        <div className={classes.footerSettings}>Settings</div>
      </footer>
    </div>
  );
};

NewPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPage);
