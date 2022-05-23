import React from 'react';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
const propTypes = {
  main: PropTypes.bool,
};
const defaultProps = {
  main: false,
};
const NavBar = props => {
  const {navigation, main} = props;
  return (
    <SafeAreaView >
      {main ? (
        <View style={styles.home}>
          <View></View>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => navigation.navigate('Search')}>
            <Icon name="search-outline" size={30} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{marginTop: -10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={40} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView >
  );
};
NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
const styles = StyleSheet.create({
  home: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 0,
  },
  searchIcon: {
    width: 44,
    height: 44,
    backgroundColor: '#ee6c4d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 10,
  },
});
export default NavBar;
