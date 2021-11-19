import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
const {height} = Dimensions.get('screen');
const Home = () => {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [arrayImages, setArrayImages] = useState([]);
  const [moviesPopularTV, setMoviesPopularTV] = useState([]);
  const getData = () => {
    return Promise.all([
      getPopularMovies(),
      getUpcomingMovies(),
      getPopularTV(),
    ]);
  };
  useEffect(() => {
    getData().then(
      ([moviesPopularData, moviesUpcomingData, moviesPopularTvData]) => {
        const arrayImg = [];
        moviesUpcomingData.forEach(movie => {
          arrayImg.push(
            'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
          );
        });
        setArrayImages(arrayImg);
        setMoviesPopular(moviesPopularData);
        setMoviesPopularTV(moviesPopularTvData);
      },
    );
  }, []);
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.slider}>
          <SliderBox
            dotStyle={styles.dotSlider}
            sliderBoxHeight={height / 1.9}
            autoplay={true}
            images={arrayImages}
            circleLoop={true}
          />
        </View>
        <View style={styles.carousel}>
          <List title="Popular movies" content={moviesPopular} />
        </View>
        <View style={styles.carousel}>
          <List title="Upcoming movies" content={moviesPopularTV} />
        </View>
      </ScrollView>
    </React.Fragment>
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
export default Home;
