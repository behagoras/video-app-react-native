import React from 'react';
import styled from 'styled-components/native';
import {PixelRatio, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';

export default class YouTubeComponent extends React.Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
    videoId: this.props.videoId,
  };

  _youTubeRef = React.createRef();

  render(props) {
    return (
      <YouTube
        {...props}
        ref={this._youTubeRef}
        apiKey="AIzaSyBElUBjMtstBfFM-8RQvZYXPbyJc20vBlw"
        videoId={this.state.videoId}
        play={this.state.isPlaying}
        loop={this.state.isLooping}
        fullscreen={this.state.fullscreen}
        controls={1}
        style={[
          {
            height: PixelRatio.roundToNearestPixel(
              this.state.playerWidth / (16 / 9),
            ),
          },
        ]}
      />
    );
  }
}
