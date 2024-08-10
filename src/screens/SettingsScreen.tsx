import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
            <Text style={styles.labelBold}>Display Name: </Text>
            {user.displayName || 'N/A'}
          </Text>
          <Button title="Logout" onPress={logout} />
        </View>
      ) : (
        <Text>No user is logged in.</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  labelBold: {
    fontWeight: 'bold',
  },
});
