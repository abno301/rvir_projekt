import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function NoConnectionScreen({ navigation }: { navigation?: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No internet connection</Text>
      <Pressable style={styles.button} onPress={() => navigation?.reload()}>
        <Text style={styles.buttonText}>Retry</Text>
      </Pressable>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#990008',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
