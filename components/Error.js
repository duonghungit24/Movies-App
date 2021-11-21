import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const defaultProps = {
  textError1: 'Opps! , Something went wrong',
  textError2: 'Make sure you are online and restart the app',
};
const Error = props => {
  const {textError1, textError2} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textError1}</Text>
      <Text style={styles.text}>{textError2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 17,
  },
});
Error.propTypes = {
  textError1: PropTypes.string,
  textError2: PropTypes.string,
};
Error.defaultProps = defaultProps;
export default memo(Error);
