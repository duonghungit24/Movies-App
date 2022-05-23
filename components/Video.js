import React from 'react';
import {StyleSheet, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
const VideoShow = ({onClose}) => {
  return (
    <VideoPlayer
      source={{uri:'https://vjs.zencdn.net/v/oceans.mp4'}}
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullscreenOrientation="all"
      // style={styles.backgroundVideo}
    />
  );
};

export default VideoShow;
var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
  },
});
