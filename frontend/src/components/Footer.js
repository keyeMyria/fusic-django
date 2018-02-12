import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Slider from 'rc-slider';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Shuffle from 'material-ui-icons/Shuffle';
import SkipPrevious from 'material-ui-icons/SkipPrevious';
import SkipNext from 'material-ui-icons/SkipNext';
import PauseCircleOutline from 'material-ui-icons/PauseCircleOutline';
import PlayCircleOutline from 'material-ui-icons/PlayCircleOutline';
import Settings from 'material-ui-icons/Settings';

import 'rc-slider/assets/index.css';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
    flex: '0 0 50%',
    position: 'relative', // for the slider
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
    overflow: 'hidden',
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

  // footerControls
  slider: {
    position: 'absolute',
    bottom: 10,
  },

  // footerSettings
  settingsButton: {
    height: '100%',
    position: 'absolute',
    right: 0,
  },
});

const Footer = ({ classes, theme, className: classNameProp }) => {
  const className = classNames(classes.root, classNameProp);

  const trackStyle = {
    backgroundColor: theme.palette.primary.main,
  };

  const handleStyle = {
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.text.primary,
  };

  return (
    <footer className={className}>
      <div className={classes.footerDetails}>
        <img
          className={classes.footerImg}
          src="https://i.pinimg.com/736x/f7/d8/07/f7d807c40002aa4139517a5ea22aab3a--best-album-art-top-albums.jpg"
          alt="Album art"
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

      <div className={classes.footerControls}>
        <Shuffle color="primary" />
        <SkipPrevious color="action" />
        <PauseCircleOutline color="error" />
        <SkipNext color="action" />
        <Slider
          className={classes.slider}
          trackStyle={trackStyle}
          handleStyle={handleStyle}
        />
      </div>
      <div className={classes.footerSettings}>
        <Button className={classes.settingsButton}>
          <Settings />
        </Button>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);
