import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import Movies from "../assets/data/movies";
import Header from "./Header";

const MovieCards = () => {
  return (
    <View>
      <FlatList
        data={Movies}
        renderItem={({ item }) => (
          <Pressable data={item}>
            <Image
              style={{ aspectRatio: 2 / 3, height: 240 }}
              source={item.image}
            />
          </Pressable>
        )}
        // keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={Header}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({});
