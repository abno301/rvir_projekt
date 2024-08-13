import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';

const auth = getAuth();

function RegisterScreen({ navigation }: StackScreenProps<any>) {
  const [value, setValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  async function signUp() {
    if (value.email === '' || value.password === '' || value.confirmPassword === '') {
      setValue({
        ...value,
        error: 'All fields are mandatory.',
      });
      return;
    }

    if (value.password !== value.confirmPassword) {
      setValue({
        ...value,
        error: 'Passwords do not match.',
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <MaterialIcons
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={value.confirmPassword}
          onChangeText={(text) => setValue({ ...value, confirmPassword: text })}
          secureTextEntry={!confirmPasswordVisible}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <MaterialIcons
            name={confirmPasswordVisible ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {value.error ? <Text style={styles.errorText}>{value.error}</Text> : null}

      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>
          Have an account?{" "}
          <Text style={styles.signinLink} onPress={() => navigation.navigate('Log In')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c', // Main theme color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: '#fff',
  },
  passwordContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor: '#990008',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  signinContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signinText: {
    fontSize: 14,
    color: '#fff',
  },
  signinLink: {
    color: '#990008',
    fontWeight: 'bold',
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

export default RegisterScreen;
