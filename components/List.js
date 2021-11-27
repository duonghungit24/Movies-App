import React, {memo} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Cart from './Cart';
import PropTypes from 'prop-types';
const List = props => {
  const {title, navigation, content} = props;
  const handleRender = ({item}) => <Cart navigation={navigation} item={item} />;
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={content}
          keyExtractor={item => item.id}
          renderItem={handleRender}
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
export default memo(List);
