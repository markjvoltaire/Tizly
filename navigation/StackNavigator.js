import { View, Text } from "react-native";
import React from "react";

import Explore from "../screens/Explore";
import HomeScreen from "../screens/HomeScreen";
import Subscriptions from "../screens/Subscriptions";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./TabNavigator";
import Settings from "../screens/Settings";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",

  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ExploreScreen" component={Explore} />
    </Stack.Navigator>
  );
};

const SubscriptionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SubscriptionScreen" component={Subscriptions} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
};

const WelcomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  ExploreStackNavigator,
  SubscriptionStackNavigator,
  SettingsStackNavigator,
  WelcomeStackNavigator,
};