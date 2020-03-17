import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from './PlayerLayout';
import ControlLayout from './ControlLayout';
import ControlButton from '../../player/Buttons/PlayerButton';

const styles = StyleSheet.create({
  video: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const Player = () => {
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const onBuffer = ({isBuffering}) => {
    setLoading(isBuffering);
  };
  const onLoad = () => {
    setLoading(false);
  };
  const playPause = () => {
    console.log('playPause');
    setPaused(!paused);
  };
  const handleFullScreen = () => {
    setFullscreen(true);
  };

  return (
    <Layout
      video={
        <Video
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          loading={loading}
          style={styles.video}
          resizeMode="contain"
          onBuffer={onBuffer}
          // controls
          paused={paused}
          onLoad={onLoad}
          fullscreen={fullscreen}
        />
      }
      loader={<ActivityIndicator color="red" />}
      loading={loading}
      controls={
        <ControlLayout>
          <ControlButton
            onPress={playPause}
            paused={paused}
            text={paused ? '▶️' : '⏸️'}
          />
          <Text>Progress bar</Text>
          <Text>Time left</Text>
          <Text>Full Screen</Text>
        </ControlLayout>
      }
    />
  );
};

export default Player;
