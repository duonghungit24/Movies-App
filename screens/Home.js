import React, {useEffect, useState, memo} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
  getFamilyMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';
const {height} = Dimensions.get('screen');
const Home = ({navigation}) => {
  const [moviesPopular, setMoviesPopular] = useState();
  const [arrayImages, setArrayImages] = useState();
  const [moviesPopularTV, setMoviesPopularTV] = useState();
  const [moviesFamily, setMoviesFamily] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const getData = () => {
    return Promise.all([
      getPopularMovies(),
      getUpcomingMovies(),
      getPopularTV(),
      getFamilyMovies(),
    ]);
  };
  useEffect(() => {
    getData()
      .then(
        ([
          moviesPopularData,
          moviesUpcomingData,
          moviesPopularTvData,
          moviesFamilyData,
        ]) => {
          const arrayImg = [];
          moviesUpcomingData.forEach(movie => {
            arrayImg.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setArrayImages(arrayImg);
          setMoviesPopular(moviesPopularData);
          setMoviesPopularTV(moviesPopularTvData);
          setMoviesFamily(moviesFamilyData);
          setLoaded(true);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoaded(true));
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      {loaded && !error && (
        <ScrollView>
          {arrayImages && (
            <View style={styles.slider}>
              <SliderBox
                dotStyle={styles.dotSlider}
                sliderBoxHeight={height / 1.6}
                autoplay={true}
                images={arrayImages}
                circleLoop={true}
              />
            </View>
          )}
          {moviesPopular && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular movies"
                content={moviesPopular}
              />
            </View>
          )}
          {moviesPopularTV && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular TV Shows"
                content={moviesPopularTV}
              />
            </View>
          )}
          {moviesFamily && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Top rate movies"
                content={moviesFamily}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotSlider: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(Home);
