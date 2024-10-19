import React from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import Colors from "../../constants/Colors";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

export default function Home() {
  return (
    <Text>Home</Text>
  );
}
