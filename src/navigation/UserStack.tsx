import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavoriteMoviesScreen from "../screens/FavoriteMoviesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setIsLandscape(width > height);
    };

    Dimensions.addEventListener('change', handleOrientationChange);

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Cleanup the event listener on component unmount
    return () => subscription?.remove();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#0e1529" },
          tabBarItemStyle: isLandscape
            ? { paddingVertical: 5 } 
            : {},
          tabBarLabelStyle: isLandscape
            ? { fontSize: 12 } 
            : { fontSize: 14 },
        }}
        sceneContainerStyle={{ backgroundColor: "#0e1529" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: !isLandscape, // Hide label in landscape mode
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                color={focused ? '#990008' : "gray"}
                size={isLandscape ? 20 : 24} // Smaller icon size in landscape mode
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
            tabBarShowLabel: !isLandscape, // Hide label in landscape mode
            tabBarIcon: ({ focused }) => (
              <Feather
                name="heart"
                color={focused ? '#990008' : "gray"}
                size={isLandscape ? 20 : 24} // Smaller icon size in landscape mode
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
            tabBarShowLabel: !isLandscape, // Hide label in landscape mode
            tabBarIcon: ({ focused }) => (
              <Feather
                name="settings"
                color={focused ? '#990008' : "gray"}
                size={isLandscape ? 20 : 24} // Smaller icon size in landscape mode
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
