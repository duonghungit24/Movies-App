import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
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
    <View>
      {main ? (
        <View>
          <Icon name="search-outline" size={30} />
        </View>
      ) : (
        <View style={{marginTop: -10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={40} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
export default NavBar;
