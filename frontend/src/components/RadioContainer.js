import React from 'react';
import { connect } from 'react-redux';
import Radio from './Radio';

import { subscribe, unsubscribe, upVote } from '../actions';

const mapStateToProps = state => {
  return {
    radios: state.radios,
  };
};

class RadioContainer extends React.Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(subscribe(id));
  }

  componentWillUnmount() {
    const { dispatch, id } = this.props;
    dispatch(unsubscribe(id));
  }

  onVote = (songId, e) => this.props.dispatch(upVote(songId, this.props.id));

  render() {
    const { songs, votes, radios } = this.props.radios;
    const radio = {
      ...radios[this.props.id],
      songs: {},
    };

    // join votes & songs
    for (const voteId in votes) {
      const vote = votes[voteId];
      // only votes on the current radio
      if (vote.radio === this.props.id) {
        // make a list of votes for each song
        if (radio.songs[vote.song]) {
          radio.songs[vote.song].push(vote);
        } else {
          const song = { ...songs[vote.song] }; // shallow copy
          song.votes = [vote];
          radio.songs[vote.song] = song;
        }
      }
    }

    return radio ? (
      <Radio radio={radio} onVote={this.onVote} />
    ) : (
      <div>Loading...</div>
    );
  }
}

RadioContainer.propTypes = {};

export default connect(mapStateToProps)(RadioContainer);
