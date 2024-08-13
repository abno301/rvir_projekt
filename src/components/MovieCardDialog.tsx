import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, setDoc, Firestore } from '@firebase/firestore';
import { firestore } from '../../config';
import Feather from "react-native-vector-icons/Feather";

export default function MovieCardDialog({ visible, onClose, film }: { visible: boolean, onClose: () => void, film: any }) {


    const confirmMessage = () => {
        Alert.alert(
          "Success",
          "Movie was successfully added to favorites!",
          [
            { text: "OK" }
          ]
        );
      };

    function getVoteColor(vote: number) {
        if (vote < 5) {
            return 'red';
        } else if (vote >= 5 && vote < 7) {
            return 'orange';
        } else {
            return 'green';
        }
    }

    const addMovie = async () => {
        const filmData = {
            release_date: film.release_date,
            adult: film.adult,
            backdrop_path: film.backdrop_path,
            id: film.id,
            media_type: film.media_type,
            my_comment: "", // Empty comment as requested
            overview: film.overview,
            original_language: film.original_language,
            original_title: film.original_title,
            popularity: film.popularity,
            poster_path: film.poster_path,
            title: film.title,
            vote_average: film.vote_average,
            vote_count: film.vote_count,
        };

        try {
            // Reference to the document in the 'favoriteMovies' collection
            const movieRef = doc(firestore, 'favoriteMovies', film.id.toString());

            // Add or update the movie document
            await setDoc(movieRef, filmData);

            console.log('Film successfully added to favorites!');
            onClose(); // Close the dialog
            confirmMessage();
           
        } catch (error) {
            console.error('Error adding film to favorites: ', error);
        }
    }

    const handleAddFilm = () => {
        const filmData = {
            release_date: film.release_date,
            adult: film.adult,
            backdrop_path: film.backdrop_path,
            id: film.id,
            media_type: film.media_type,
            my_comment: "", // Empty comment as requested
            original_language: film.original_language,
            original_title: film.original_title,
            popularity: film.popularity,
            poster_path: film.poster_path,
            title: film.title,
            vote_average: film.vote_average,
            vote_count: film.vote_count,
        };
    }


    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.cardContainer}>
                    <Text style={styles.title}>{film.title}</Text>
                    <Text style={[styles.vote, { backgroundColor: getVoteColor(film.vote_average) }]}>
                        {Math.round(film.vote_average)}/10
                    </Text>
                    <Text style={styles.voteCount}>Number of ratings: {film.vote_count}</Text>
                    <Text style={styles.overview}>{film.overview}</Text>
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

                    <View style={styles.infoContainer}>
                        <View style={styles.infoItem}>
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={addMovie} style={styles.closeButton}>
                            <Feather
                                name="heart"
                                color={'#FFF'}

                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
    },
    cardContainer: {
        backgroundColor: '#1c1c1c',
        borderRadius: 15,
        padding: 20,
        margin: 20,
        maxWidth: 350,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
    },
    vote: {
        fontSize: 16,
        color: 'white',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    voteCount: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 15,
    },
    overview: {
        fontSize: 14,
        color: '#d3d3d3',
        textAlign: 'center',
        marginBottom: 15,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
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
    closeButton: {
        alignSelf: 'center',
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 14,
    },
});
