import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FilmCard({ film }: { film: any }) {
  // Function to handle the favorite icon press
  const handleFavoritePress = () => {
    // Implement your favorite functionality here
    console.log("Favorite icon pressed");
  };

  function getVoteColor(vote:any) {
    if (vote < 5) {
      return 'red';
    } else if (vote >= 5 && vote < 7) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={handleFavoritePress}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${film.poster_path}` }}
            style={styles.image}
          />
          <MaterialIcons name="favorite-border" size={24} color="white" style={styles.favoriteIcon} />
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{film.title}</Text>
        <Text style={[styles.vote, { backgroundColor: getVoteColor(film.vote_average) }]}>
          {Math.round(film.vote_average)}/10
        </Text>
        <Text style={styles.voteCount}>Število ocen: {film.vote_count}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="date-range" size={16} color="#696969" />
            <Text style={styles.infoText}>{film.release_date}</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="translate" size={16} color="#696969" />
            <Text style={styles.infoText}>{film.original_language}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 15,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  vote: {
    fontSize: 14,
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  voteCount: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    color: '#696969',
    marginLeft: 4,
  },
});
