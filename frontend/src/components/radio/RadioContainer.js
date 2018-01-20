import React from 'react';
import { connect } from 'react-redux';
import Radio from './Radio';

import { subscribe, unsubscribe, upVote } from '../../data/actions';

const mapStateToProps = state => {
  return {
    radios: state.radios,
  };
};

class RadioContainer extends React.Component {
  // count how many RadioContainers are constructed
  static subscriptions = {};

  subscribe(radioId) {
    if (radioId in this.constructor.subscriptions)
      this.constructor.subscriptions[radioId]++;
    else {
      this.constructor.subscriptions[radioId] = 1;

      this.props.dispatch(subscribe(radioId));
    }
  }

  unsubscribe(radioId) {
    if (!(radioId in this.constructor.subscriptions))
      throw new Error(`unsubscribe unknown subscription: ${radioId}`);
    this.constructor.subscriptions[radioId]--;

    if (this.constructor.subscriptions[radioId] === 0)
      this.props.dispatch(unsubscribe(radioId));
  }

  componentDidMount() {
    const { id } = this.props;
    this.subscribe(id);
  }

  componentWillUnmount() {
    const { id } = this.props;
    this.unsubscribe(id);
  }

  onVote = (songId, e) => this.props.dispatch(upVote(songId, this.props.id));

  render() {
    const { songs, votes, radios } = this.props.radios;

    if (!radios[this.props.id]) return <div>Loading...</div>;

    const radio = {
      ...radios[this.props.id],
    };
    const radioSongs = {};

    // join votes & songs
    for (const voteId in votes) {
      const vote = votes[voteId];
      // only votes on the current radio
      if (vote.radio === this.props.id) {
        // make a list of votes for each song
        if (radioSongs[vote.song]) {
          radioSongs[vote.song].push(vote);
        } else {
          const song = { ...songs[vote.song] }; // shallow copy
          song.votes = [vote];
          radioSongs[vote.song] = song;
        }
      }
    }

    // TODO: sort songs
    radio.songs = Object.values(radioSongs);

    return <Radio radio={radio} onVote={this.onVote} />;
  }
}

RadioContainer.propTypes = {};

export default connect(mapStateToProps)(RadioContainer);
