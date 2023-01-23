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
          <Pressable data={item} style={{ margin: 10 }}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 6,
                marginLeft: 8,
              }}
              source={item.image}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontFamily: "Petrona_600SemiBold",
                width: 150,
                marginTop: 10,
              }}
            >
              {item.name.substr(0, 15)}
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 4,
                fontSize: 15,
                fontFamily: "Petrona_400Regular",
                color: "gray",
              }}
            >
              U/A * {item.language}
            </Text>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 4,
                fontSize: 14,
                fontFamily: "Petrona_500Medium",
              }}
            >
              {item.genre}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={Header}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({});
