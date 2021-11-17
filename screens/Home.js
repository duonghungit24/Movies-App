import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet, FlatList, Text} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
const {height} = Dimensions.get('screen');
const Home = () => {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [arrayImages, setArrayImages] = useState([]);
  useEffect(() => {
    getUpcomingMovies()
      .then(moviesImages => {
        const arrayImg = [];
        moviesImages.forEach(movie => {
          arrayImg.push(
            'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
          );
        });
        setArrayImages(arrayImg);
      })
      .catch(e => {
        console.error(e);
      });
    getPopularMovies()
      .then(movies => {
        setMoviesPopular(movies);
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <React.Fragment>
      <View style={styles.slider}>
        <SliderBox
          dotStyle={styles.dotSlider}
          sliderBoxHeight={height / 1.5}
          autoplay={true}
          images={arrayImages}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
        <List title="hello world" content={moviesPopular} />
      </View>
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
