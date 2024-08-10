import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoriteMoviesScreen from "../screens/FavoriteMoviesScreen";
import SettingsScreen from "../screens/SettingsScreen";

//import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0e1529" },
        }}
        sceneContainerStyle={{ backgroundColor: "#0e1529" }}
      >
  {/*}      <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                color={focused ? "white" : "gray"}
                size={"24"}
              />
            ),
          }}
        />

        */}
       
       <Tab.Screen
          name="Domov"
          component={HomeScreen}
        
        />

<Tab.Screen
          name="Najljubši"
          component={FavoriteMoviesScreen}
        
        />

<Tab.Screen
          name="Nastavitve"
          component={SettingsScreen}
        
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}