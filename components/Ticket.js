import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { MoviesCards } from "../Context";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const Ticket = () => {
  const navigation = useNavigation();
  const { ticket } = useContext(MoviesCards);
  return (
    <View>
      {/* //getting the value of the ticket global variable to use here */}
      {ticket.slice(0, 1).map((item, index) => (
        <ImageBackground
          key={index}
          source={item.image}
          style={{ height: 170, aspectRatio: 5 / 2 }}
        >
          <Pressable
            style={{
              position: "absolute",
              backgroundColor: "#ffff",
              height: 130,
              padding: 10,
              borderRadius: 6,
              width: "82%",
              top: 140,
              left: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Petrona_500Medium",
                fontSize: 17,
                color: "gray",
              }}
            >
              Your Ticket
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 16, fontFamily: "Petrona_700Bold" }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Petrona_400Regular",
                    color: "gray",
                  }}
                >
                  U/A * English
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#3339FF",
                  padding: 10,
                  borderRadius: 6,
                  marginRight: 10,
                }}
                onPress={() => navigation.navigate("Ticket", item)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Petrona_600SemiBold",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  View Ticket
                </Text>
              </Pressable>
            </View>
            <Text style={{ fontFamily: "Petrona_500Medium", fontSize: 15 }}>
              {item.mall}
            </Text>
          </Pressable>
        </ImageBackground>
      ))}
      <View style={{ marginTop: 110 }} />
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({});
