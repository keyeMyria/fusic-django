import React from 'react';
import Radio from './Radio';

class RadioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    const { id } = props;
    fetch(`api/radios/${id}`)
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
          radio: radio
        });
      });
  }
  render() {
    const { radio } = this.state;
    return radio ? <Radio radio={radio} /> : <div>Loading...</div>;
  }
}

RadioContainer.propTypes = {};

export default RadioContainer;
