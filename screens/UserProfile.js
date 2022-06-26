import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import BottomTabNavigator from "../navigation/TabNavigator";
import ProfileNav from "../components/profile/ProfileNav";

import { supabase } from "../services/supabase";
import { useUser } from "../context/UserContext";

export default function UserProfile({ navigation }) {
  const { user, setUser } = useUser();

  const FullSeperator = () => <View style={styles.fullSeperator} />;

  async function getUserById() {
    const userId = supabase.auth.currentUser.id;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();
    setUser(data);
  }

  useEffect(() => {
    const getUserProfile = async () => {
      await getUserById();
    };
    getUserProfile();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Image
        style={styles.userBanner}
        source={{
          uri: user.bannerImage,
        }}
      />

      <Image
        style={styles.userBanner}
        source={require("../assets/fader.png")}
      />

      <Image
        style={styles.profileImage}
        source={{
          uri: user.profileimage,
        }}
      />

      {/* <Image
        style={styles.img}
        source={{
          uri: user.profileimage,
        }}
      /> */}
      <View style={styles.userinfoContainer}>
        <Text style={styles.displayname}>{user.displayName}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.backButton}
          source={require("../assets/backButton.png")}
        />
      </TouchableOpacity>
      <ProfileNav />
      <FullSeperator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userBanner: {
    position: "absolute",
    width: 455,
    right: -10,
    height: 455,
  },

  displayname: {
    position: "absolute",
    height: 38,
    left: 75,
    right: 64.27,
    top: 273,
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  username: {
    position: "absolute",
    color: "white",
    top: 303,
    left: 75,
  },

  bio: {
    position: "absolute",
    color: "white",
    fontSize: 13,
    width: 400,
    top: 345,
    left: 8,
  },

  followbutton: {
    position: "absolute",
    resizeMode: "contain",
    width: 100,
    left: 10,
    top: 320,
  },
  profileImage: {
    position: "absolute",
    left: 10,
    width: 50,
    height: 50,
    resizeMode: "contain",
    top: 318,
  },
  backButton: {
    position: "absolute",
    resizeMode: "contain",
    width: 25,
    height: 30,
    left: 41,
    top: 90,
  },
  fullSeperator: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.8,
    opacity: 0.2,
    width: 900,
    left: 1,
    top: 470,
  },
});
