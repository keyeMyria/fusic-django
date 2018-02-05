import PropTypes from 'prop-types';
import React from 'react';

import Slider from 'rc-slider';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Shuffle from 'material-ui-icons/Shuffle';
import SkipPrevious from 'material-ui-icons/SkipPrevious';
import SkipNext from 'material-ui-icons/SkipNext';
import PauseCircleOutline from 'material-ui-icons/PauseCircleOutline';
import PlayCircleOutline from 'material-ui-icons/PlayCircleOutline';

import 'rc-slider/assets/index.css';

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

  slider: {
    position: 'absolute',
    bottom: 10,
  },
});

const NewPage = ({ classes, theme }) => {
  const trackStyle = {
    backgroundColor: theme.palette.primary.main,
  };

  const handleStyle = {
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.text.primary,
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography>asdf</Typography>
          <Button>Asdf</Button>
          <Button color="primary">Asdf</Button>
          <Button color="secondary">Asdf</Button>
          <Button raised>Asdf</Button>
          <Button raised color="primary">
            Asdf
          </Button>
          <Button raised color="secondary">
            Asdf
          </Button>
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
        <div className={classes.footerSettings}>Settings</div>
      </footer>
    </div>
  );
};

NewPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPage);
