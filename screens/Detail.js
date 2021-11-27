import React, {useEffect, useState, memo} from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import {getDetailsMovies} from '../services/services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayBtn from '../components/PlayButton';
const {height, width} = Dimensions.get('screen');
const imageError = require('../assets/image/image_error.jpg');
const Details = ({navigation, route}) => {
  const [loaded, setLoaded] = useState(false);
  const [movieDetails, setMoviesDetails] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const idMovies = route.params.movieId;
  useEffect(() => {
    getDetailsMovies(idMovies)
      .then(movieData => {
        setLoaded(true);
        setMoviesDetails(movieData);
      })
      .catch(error => console.log(error));
  }, [idMovies]);
  const handleVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <React.Fragment>
      {loaded && (
        <View>
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
            <View style={styles.container}>
              <View style={styles.playBtn}>
                <PlayBtn handlePlayBtn={handleVisible} />
              </View>
              <Text style={styles.title}>{movieDetails.title}</Text>
              {movieDetails.genres && (
                <View style={styles.wrapItem}>
                  {movieDetails.genres.map(item => (
                    <Text key={item.id} style={styles.item}>
                      {item.name}
                    </Text>
                  ))}
                </View>
              )}
              <StarRating
                disabled={true}
                maxStars={5}
                rating={movieDetails.vote_average / 2}
                fullStarColor={'gold'}
                starSize={30}
              />
              <Text style={styles.overview}>{movieDetails.overview}</Text>
              <Text style={styles.releaseDate}>
                {'Realease date: ' +
                  dateFormat(movieDetails.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal animationType="slide" visible={modalVisible}>
            <Pressable onPress={handleVisible}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </Modal>
        </View>
      )}
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: height / 2.5,
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 3,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  wrapItem: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 10,
  },
  item: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
    color: 'black',
  },
  releaseDate: {
    color: 'black',
    fontWeight: 'bold',
  },
  playBtn: {
    position: 'absolute',
    top: -30,
    right: 10,
  },
});
export default memo(Details);
