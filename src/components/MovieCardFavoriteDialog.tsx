import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, deleteDoc } from '@firebase/firestore';
import { firestore } from '../../config';
import Feather from "react-native-vector-icons/Feather";

export default function MovieCardFavoriteDialog({ visible, onClose, film }: { visible: boolean, onClose: () => void, film: any }) {

    const confirmMessage = () => {
        Alert.alert(
            "Success",
            "Movie was successfully deleted from favorites!",
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

    const deleteMovie = async () => {
        try {
            // Reference to the document in the 'favoriteMovies' collection
            const movieRef = doc(firestore, 'favoriteMovies', film.id.toString());

            // Delete the movie document
            await deleteDoc(movieRef);

            console.log('Film successfully deleted from favorites!');
            onClose(); // Close the dialog
            confirmMessage();
        } catch (error) {
            console.error('Error deleting film from favorites: ', error);
        }
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
                        <TouchableOpacity onPress={deleteMovie} style={styles.closeButton}>
                            <Feather
                                name="trash-2"
                                color={'#FFF'}
                                size={24}
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
        margin: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 14,
    },
});
