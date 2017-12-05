import React, { Component } from 'react';
import './Youtube.css';
import axios from 'axios';
import * as keys from '../../keys/keys';
class Youtube extends Component {
  state = {
    vid: {
      title: [],
      resultYt: []
    }
  };

  async componentWillMount() {
    const links = await axios.get(
      'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC5jkXpfnBhlDjqh0ir5FsIQ&key=' +keys.youtubeApiKey
    );
    this.state.vid['resultYt'] = await links.data.items.map(
      obj => obj.id.videoId
    );
    this.state.vid['title'] = await links.data.items.map(
      obj => obj.snippet.title
    );
    this.setState({ vid: { ...this.state.vid } });
  }
  render() {
    console.log('Key here: ',);
    const vids = this.state.vid['resultYt'].map((vid, keys) => {
      const vidUrl = 'https://www.youtube.com/embed/' + vid;
      var frame = (
        <iframe
          key={keys}
          width="560"
          height="315"
          src={vidUrl}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
        />
      );
      return frame;
    });
    const title = this.state.vid['title'].map((title, keys) => {
      var title = <p>{title}</p>;
      return title;
    });

    return <div className="youtube">{vids}</div>;
  }
}

export default Youtube;
