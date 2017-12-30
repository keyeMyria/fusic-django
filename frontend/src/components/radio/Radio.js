import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

const styles = theme => ({
  root: {
    maxWidth: 800,
  },
  header: {
    display: 'flex',
  },
  cover: {
    width: 151,
    height: 151,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function Radio({ classes, radio, onVote }) {
  function onClick(id, e) {
    onVote(id, e).catch(err => {
      console.log('vote failed:', err);
    });
  }

  console.log('radio data:', radio);
  return (
    <div className={classes.root}>
      <Card>
        <div class={classes.header}>
          {radio.cover_url ? (
            <CardMedia
              className={classes.cover}
              image="https://www.truenorthinc.com/wp-content/uploads/2013/05/album_art_06.jpg"
              title="Live from space album cover"
            />
          ) : (
            <CardMedia
              className={classes.cover}
              image="https://www.truenorthinc.com/wp-content/uploads/2013/05/album_art_06.jpg"
              title="Live from space album cover"
            />
          )}
          <div className={classes.details}>
            <CardContent className={classes.info}>
              <Typography type="headline">{radio.name}</Typography>
              <Typography type="subheading" color="secondary">
                Mac Miller
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Previous">
                <SkipPreviousIcon />
              </IconButton>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Next">
                <SkipNextIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <CardContent>
          <List>
            <ListItem>
              <Avatar src="https://spark.adobe.com/images/landing/examples/sonata-cd-cover.jpg" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
              <ListItemSecondaryAction>
                <IconButton onClick={onClick.bind(this, 1)}>
                  <ExpandLessIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar src="http://www.covermesongs.com/wp-content/uploads/2013/01/doors-the-doors-cover-front.jpg" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
              <ListItemSecondaryAction>
                <IconButton onClick={onClick.bind(this, 2)}>
                  <ExpandLessIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider inset />
            <ListItem>
              <Avatar src="https://www.billboard.com/files/styles/900_wide/public/media/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240.jpg" />
              <ListItemText primary="Work" secondary="Jan 7, 2016" />
              <ListItemSecondaryAction>
                <IconButton onClick={onClick.bind(this, 3)}>
                  <ExpandLessIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

Radio.propTypes = {
  classes: PropTypes.object.isRequired,
  radio: PropTypes.object.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default withStyles(styles)(Radio);
