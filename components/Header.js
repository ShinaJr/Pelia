import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Types from "../assets/data/types";

const Header = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/strangeWorldHeader.jpg")}
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
              fontSize: 14,
              color: "gray",
            }}
          >
            Releasing in 2 days
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
                STRANGE WORLD
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
          </View>
          <Text style={{ fontFamily: "Petrona_500Medium", fontSize: 15 }}>
            Action, Adventure, Animated
          </Text>
        </Pressable>
      </ImageBackground>
      <View style={{ marginTop: 110,}}>
        <ScrollView style={{ flexDirection: "row", marginRight:30}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {Types.map((type, id) => (
            <Pressable key={id} style={{margin:10, borderColor:"#c0c0c0", borderWidth:0.5, borderRadius:4, padding:10}}>
              <Text style={{fontFamily:"Petrona_500Medium", textAlign:"center", fontSize: 14}}>{type.name}</Text>  
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
