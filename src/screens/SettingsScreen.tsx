import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export default function Settings() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {user ? (
        <View style={styles.userInfo}>
          <Text style={styles.label}>
            <Text style={styles.labelBold}>Email: </Text>
            {user.email}
          </Text>
          <Text style={styles.label}>
          
         
          </Text>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.noUserText}>No user is logged in.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e1529',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 5,
  },
  labelBold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#990008',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 0, // Rectangular button
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noUserText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
