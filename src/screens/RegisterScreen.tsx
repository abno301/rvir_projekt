import React from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//const auth = getAuth();

function RegisterScreen<StackScreenProps>({ navigation }: {navigation: any}) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  });
/*
  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
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
*/
  return (
    <View>
      <Text>Sign Up</Text>

      <TextInput
        placeholder="Email"
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
      />

      <TextInput
        placeholder="Password"
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        secureTextEntry
      />

      <Button title="Sign Up"  />

      {value.error ? <Text>{value.error}</Text> : null}

      <Text>
        Have an account? <Text onPress={() => navigation.navigate('Sign In')}>Sign In</Text>
      </Text>
    </View>
  );
}

export default RegisterScreen;
