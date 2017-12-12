import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    background: theme.palette.background.paper
  }
});

function Radio({ classes, radio, onVote }) {
  function onClick(id, e) {
    onVote(id, e);
  }

  console.log(radio);
  return (
    <div className={classes.root}>
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
    </div>
  );
}

Radio.propTypes = {
  classes: PropTypes.object.isRequired,
  radio: PropTypes.object.isRequired,
  onVote: PropTypes.func.isRequired
};

export default withStyles(styles)(Radio);
