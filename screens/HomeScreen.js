import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/Header";
import MovieCards from "../components/MovieCards";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <MovieCards />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
