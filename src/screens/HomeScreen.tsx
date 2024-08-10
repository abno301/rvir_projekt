import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FilmCard from '../components/MovieCard' // Assuming you have a FilmCard component similar to FilmKartica
import { filmApi } from '../hooks/useApiCall';

export default function HomeScreen() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await filmApi('trending/all/day?language=en-US');
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data.results}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Adjust the number of columns to match your design
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <FilmCard film={item} />
            </View>
          )}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <Text style={styles.loadingText}>Nalagam...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 10,
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
  },
});
