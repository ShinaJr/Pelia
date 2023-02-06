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
import Ticket from "./Ticket";
import { useNavigation } from "@react-navigation/native";
import { MoviesCards } from "../Context";
import { useContext } from "react";

const MovieCards = () => {
  const navigation = useNavigation();
  //getting access to the ticket global variable
  const { ticket } = useContext(MoviesCards);
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
                fontFamily: "Petrona_700Bold",
                width: 160,
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
                fontFamily: "Petrona_600SemiBold",
                color: "#000",
              }}
            >
              {item.genre}
            </Text>
            <Pressable
              style={{
                backgroundColor: "#3339FF",
                padding: 10,
                borderRadius: 6,
                marginLeft: 10,
                width: 100,
                marginTop: 10,
              }}
              onPress={() => {
                navigation.navigate("Movie", item);
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Petrona_600SemiBold",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                BOOK
              </Text>
            </Pressable>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={ticket.length>0? Ticket : Header}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({});
