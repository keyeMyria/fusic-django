import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 512,
    background: theme.palette.background.paper
  }
});

function Radio({ classes, radio }) {
  console.log(radio);
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <Avatar src="https://spark.adobe.com/images/landing/examples/sonata-cd-cover.jpg" />
          <ListItemText primary="Photos" secondary="Jan 9, 2016" />
        </ListItem>
        <ListItem button>
          <Avatar />
          <ListItemText primary="Work" secondary="Jan 7, 2016" />
        </ListItem>
      </List>
    </div>
  );
}

Radio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Radio);
