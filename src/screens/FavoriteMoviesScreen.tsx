import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { useFavoriteMoviesFirestore } from '../hooks/useFavoriteMoviesFirestore';
import FilmCardFavorites from '../components/MovieCardFavorites';

export default function FavoriteMoviesScreen() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await useFavoriteMoviesFirestore();
      console.log('Fetched movies:', fetchedMovies);
      setData(fetchedMovies);
      setFilteredData(fetchedMovies);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((item: any) =>
        item.title && item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchText, data]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Adjust the number of columns to match your design
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <FilmCardFavorites film={item} />
            </View>
          )}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <Text style={styles.loadingText}>No results found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
     // Black background for the screen
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#333', // Dark gray background for search bar
    borderRadius: 8,
    marginBottom: 5,
  },
  searchInput: {
    height: 40,
    borderColor: '#666', // Darker border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff', // White text color
  },
  flatListContainer: {
    paddingBottom: 30,
  },
  itemContainer: {
    flex: 1,
    padding: 5,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#fff', // White color for loading text
  },
});
