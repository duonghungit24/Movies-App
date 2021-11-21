import React, {useEffect, useState, memo} from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import {getDetailsMovies} from '../services/services';
const {height, width} = Dimensions.get('screen');
const imageError = require('../assets/image/image_error.jpg');
const Details = ({navigation, route}) => {
  const [loaded, setLoaded] = useState(false);
  const [movieDetails, setMoviesDetails] = useState([]);
  const idMovies = route.params.movieId;
  useEffect(() => {
    getDetailsMovies(idMovies)
      .then(movieData => {
        setLoaded(true);
        setMoviesDetails(movieData);
      })
      .catch(error => console.log(error));
  }, [idMovies]);
  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Image
            style={styles.image}
            source={
              movieDetails.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetails.poster_path,
                  }
                : imageError
            }
          />
        </ScrollView>
      )}
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  image: {
    height: height / 2.5,
  },
});
export default memo(Details);
