import React from "react";
import { TextInput, Text, View, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//const auth = getAuth();

function LogInScreen<StackScreenProps>({ navigation }: {navigation: any}) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
/*
  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({ ...value, error: "Email and password are mandatory." });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({ ...value, error: error.message });
    }
  }
*/
  return (
    <View>
      <Text>Log In</Text>

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

      <Button title="Log In"  />

      {value.error ? <Text>{value.error}</Text> : null}

      <Text>
        Don't Have an account?{" "}
        <Text onPress={() => navigation.navigate("Sign Up")}>Sign Up</Text>
      </Text>
    </View>
  );
}

export default LogInScreen;
