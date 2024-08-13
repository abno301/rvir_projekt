import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoriteMoviesScreen from "../screens/FavoriteMoviesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Feather from "react-native-vector-icons/Feather";

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
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                color={focused ? '#990008' : "gray"}
                
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "white" : "gray" }}>Home</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoriteMoviesScreen}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="heart"
                color={focused ? '#990008' : "gray"}
                
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "white" : "gray" }}>Favorites</Text>
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="settings"
                color={focused ? '#990008' : "gray"}
                
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "white" : "gray" }}>Settings</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
