import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
const imageError = require('../assets/image/image_error.jpg');
const Cart = props => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : imageError
        }
      />
      {!item.poster_path && <Text style={styles.nameImage}>{item.title}</Text>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 20,
  },
  nameImage: {
    position: 'absolute',
    color: 'black',
    alignSelf: 'center',
    top: 5,
  },
});
//kiem tra loi dau vao`
Cart.propTypes = {
  item: PropTypes.object,
};
export default Cart;
