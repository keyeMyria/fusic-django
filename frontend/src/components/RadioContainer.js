import React from 'react';
import { connect } from 'react-redux';
import Radio from './Radio';

import { subscribe, unsubscribe } from '../actions';

const mapStateToProps = state => {
  return {
    radio: state.radio,
  };
};

class RadioContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    fetch(`api/radios/${props.id}`)
      .then(function(res) {
        if (res.status === 200) return res.json();
        else throw new Error(res.statusText);
      })
      .then(({ songs, votes, ...radio }) => {
        // convert songs to a map
        const map = new Map();
        for (const { id, ...song } of songs) {
          song.votes = [];
          map.set(id, song);
        }

        // add votes to the map
        for (const { owner, song: id } of votes) {
          map.get(id).votes.push(owner);
        }

        radio.songs = map;
        this.setState({
          radio: radio,
        });
      });
  }

  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(subscribe(id));
  }

  componentWillUnmount() {
    const { dispatch, id } = this.props;
    dispatch(unsubscribe(id));
  }

  onVote = (id, e) => {
    console.log('onVote:', id);
  };

  render() {
    const { radio } = this.state;
    return radio ? (
      <Radio radio={radio} onVote={this.onVote} />
    ) : (
      <div>Loading...</div>
    );
  }
}

RadioContainer.propTypes = {};

export default connect(mapStateToProps)(RadioContainer);
