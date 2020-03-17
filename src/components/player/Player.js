import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from './PlayerLayout';
import ControlLayout from './Buttons/ControlLayout';
import {PlayPause, FullScreenButton} from './Buttons';
import StatusBar from './StatusBar';

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
  // const [fullscreen, setFullscreen] = useState(false);
  const [video, setVideo] = useState({});
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
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
    video.presentFullscreenPlayer();
    // setFullscreen(true);
    // setPaused(false);
  };

  const onProgress = ({currentTime, playableDuration}) => {
    setCurrent(currentTime.toFixed(0));
    setProgress((currentTime / playableDuration) * 100);
  };

  return (
    <Layout
      video={
        <Video
          ref={ref => {
            setVideo(ref);
          }}
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
          onProgress={onProgress}
          // fullscreen={fullscreen}
        />
      }
      loader={<ActivityIndicator color="red" />}
      loading={loading}
      controls={
        <ControlLayout
          playPause={playPause}
          progress={progress}
          currentTime={current}
          handleFullScreen={handleFullScreen}
          paused={paused}
        />
      }
    />
  );
};

export default Player;
