import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/services';
const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies()
      .then(movie => {
        setMovies(movie);
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};
export default App;
