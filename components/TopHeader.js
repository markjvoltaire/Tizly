import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useUser } from "../context/UserContext";

export default function TopHeader({ navigation }) {
  const { user } = useUser();
  const [query, setQuery] = useState();
  const FullSeperator = () => <View style={styles.fullSeperator} />;

  return (
    <SafeAreaView style={styles.componentContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/tizlyicon.jpg")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Still Looking?"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setQuery(text)}
            value={query}
          />
          <Image
            style={styles.searchIcon}
            source={require("../assets/Search.png")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
          <Image
            style={styles.notification}
            source={require("../assets/noti.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Image
            style={styles.setting}
            source={require("../assets/Setting.jpg")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => console.log(user)}>
        <Image
          style={styles.profileimage}
          source={{ uri: user.profileimage }}
        />
      </TouchableOpacity>
      <FullSeperator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: "white",
    height: 150,
    borderBottomWidth: 1.0,
    borderBottomColor: "#EDEDED",
  },
  setting: {
    position: "absolute",
    height: 29,
    width: 29,
    left: 368,
    top: 13,
  },

  logo: {
    position: "absolute",

    resizeMode: "contain",
    width: 52,
    height: 26,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
  },
  searchInput: {
    position: "absolute",
    top: 57,
    paddingLeft: 63,

    borderColor: "grey",
    borderWidth: 0.1,
    borderRadius: 25,
    backgroundColor: "#F3F3F9",
    width: 200,
    height: 35,
  },
  searchContainer: {
    alignItems: "center",
  },
  searchIcon: {
    height: 20,
    width: 20,
    top: 63,
    right: 75,
  },
  notification: {
    height: 24,
    width: 24,
    top: 40,
    left: 320,
  },
  profileimage: {
    position: "absolute",
    height: 34,
    width: 34,
    borderRadius: 100,
    left: 26,
    top: 12,
  },
});
