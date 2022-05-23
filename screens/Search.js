import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieTv} from '../services/services';
import Card from '../components/Cart';
import Error from '../components/Cart';
const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onSubmit = query => {
    setLoading(true);
    Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={'Tìm kiếm phim hoặc truyền hình'}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search-outline'} size={30} />
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.searchItems}>
            {/* Searched items results */}
            {searchResults && searchResults.length > 0 && (
              <FlatList
                numColumns={3}
                data={searchResults}
                renderItem={({item}) => (
                  <Card navigation={navigation} item={item} />
                )}
                keyExtractor={item => item.id}
              />
            )}

            {/* When searched but no results */}
            {searchResults && searchResults.length == 0 && (
              <View style={styles.noResults}>
                <Text>Không tìm thấy kết quả phù hợp với từ khóa của bạn.</Text>
                <Text>Thử từ khóa khác.</Text>
              </View>
            )}

            {/* When nothing is searched */}
            {!searchResults && (
              <View style={styles.empty}>
                <Text>Nhập từ khóa tìm kiếm</Text>
              </View>
            )}

            {/* Error */}
            {error && <Error />}
          </View>
        )}
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 0.16,
    height: 50,
    padding: 15,
  },
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },

  searchItems: {
    paddingRight:5
  },

  noResults: {
    paddingTop: 20,
  },
  empty: {
    paddingLeft: 23,
  },
});

export default Search;
