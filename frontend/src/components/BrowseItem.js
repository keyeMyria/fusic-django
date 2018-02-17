import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 200,
  },
};

function BrowseItem(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/en/4/40/WolfmotherEP.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Wolf mother
          </Typography>
          <Typography component="p">Wolf mother</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

BrowseItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrowseItem);
