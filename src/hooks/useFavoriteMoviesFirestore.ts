import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../config';

export const useFavoriteMoviesFirestore = async () => {
    try {
      // Reference to the 'favoriteMovies' collection
      const moviesCollectionRef = collection(firestore, 'favoriteMovies');
  
      // Get all documents from the collection
      const querySnapshot = await getDocs(moviesCollectionRef);
  
      // Extract data from the documents
      const movies = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
  
      // console.log('Fetched favorite movies:', movies);
      return movies;
    } catch (error) {
      console.error('Error fetching favorite movies: ', error);
    }
  };

