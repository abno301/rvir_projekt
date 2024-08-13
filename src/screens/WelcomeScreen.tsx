import React from 'react';
import { Text, Pressable, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#080404', '#080404']} style={styles.gradient}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Movie App</Text>
          
            <Image
              source={require('../../assets/prenos.png')}
              style={{ width: 200, height: 200 }}
            />
          
          <Text style={styles.subtitle}>
            Welcome to the Movie App! Please sign in or sign up to continue.
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Log In')}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    backgroundColor: '#0e1529', // Ensure background color is black
  },
  contentContainer: {
    marginHorizontal: 16,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#990008',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 16,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#990008',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 8,
    borderRadius: 0, // Rectangular buttons
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default WelcomeScreen;
