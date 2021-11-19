import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Cart from './Cart';
import PropTypes from 'prop-types';
const List = props => {
  const {title, content} = props;
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={content}
          renderItem={({item}) => <Cart item={item} />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 15,
    marginLeft: 5,
  },
  list: {
    marginTop: 25,
  },
});
List.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
export default List;
