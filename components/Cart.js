import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
const Cart = props => {
  const {item} = props;
  console.log(item);
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  image: {
    width: 120,
    height: 200,
    resizeMode: 'cover',
  },
});
export default Cart;
