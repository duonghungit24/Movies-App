import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const PlayBtn = props => {
  const {handlePlayBtn} = props;
  return (
    <Pressable onPress={() => handlePlayBtn()} style={styles.playBtn}>
      <Icon name="caret-forward-outline" size={35} color="#fff" />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  playBtn: {
    alignItems: 'center',
    width: 100,
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#ef476f',
  },
});
export default PlayBtn;
