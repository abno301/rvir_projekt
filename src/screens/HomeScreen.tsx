import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import FilmCard from '../components/MovieCard';
import { filmApi } from '../hooks/useApiCall';

export default function HomeScreen() {
  const [data, setData] = useState<any | null>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await filmApi('trending/all/day?language=en-US');
        // console.log('API Response:', responseData);
        setData(responseData.results);
        setFilteredData(responseData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <FilmCard film={item} />
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
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 8
  },
  searchInput: {
    height: 40,
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff',
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
    color: '#fff',
  },
});
