import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MaterialIcons } from '@expo/vector-icons';

const auth = getAuth();

function LogInScreen({ navigation }: StackScreenProps<any>) {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({ ...value, error: "Email and password are mandatory." });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      // Optionally navigate to a different screen on success
      // navigation.navigate("Home");
    } catch (error) {
      setValue({ ...value, error: error.message });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

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

      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {value.error ? <Text style={styles.errorText}>{value.error}</Text> : null}

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don't Have an account?{" "}
          <Text style={styles.signupLink} onPress={() => navigation.navigate("Sign Up")}>
            Sign Up
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
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#ffffff',
  },
  signupLink: {
    color: '#990008',
    fontWeight: 'bold',
  },
});

export default LogInScreen;
