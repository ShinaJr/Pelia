import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { MoviesCards } from "../Context";
import { WebView } from "react-native-webview";
import TicketScreen from "./TicketScreen";

const TheatreScreen = ({ route, navigation }) => {
  const item = route.params;
  const { seats, setSeats } = useContext(MoviesCards); //getting access to the seats using context.
  const onSeatSelect = (item) => {
    const seatSelected = seats.find((seat) => seat === item);
    if (seatSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };
  const showSeats = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {seats.map((seat, index) => (
          <Text
            key={index}
            style={{
              fontSize: 15,
              fontFamily: "Petrona_600SemiBold",
              paddingHorizontal: 4,
            }}
          >
            {seat}
          </Text>
        ))}
      </View>
    );
  };
  //initializing payments
  const fee = 500;
  const numberOfSeats = seats.length;
  const total = seats.length === 0 ? 0 : fee + numberOfSeats * 4000;

  //integrating paystack
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <SafeAreaView>
      <Paystack
        paystackKey="pk_test_3ecb350b1b4d664300c05862ed7c7355e1c73548"
        paystackSecretKey="sk_test_c57e9db234189e978bd458969e6fa371d44caf47"
        billingEmail="lasisioluwashina@gmail.com"
        billingMobile="08175546854"
        activityIndicatorColor="#3339FF"
        billingName="Moses Oluwashina Lasisi"
        currency="NGN"
        amount={total}
        onCancel={(e) => {
          Alert.alert("Payment cancelled!");
        }}
        onSuccess={(res) => {
          navigation.navigate("Ticket", res);
        }}
        ref={paystackWebViewRef}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 16, fontFamily: "Petrona_700Bold" }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Petrona_600SemiBold",
                color: "gray",
              }}
            >
              {item.mall}
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 12 }}>
          <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          fontFamily: "Petrona_700Bold",
        }}
      >
        {item.timeSelected}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          color: "gray",
          fontFamily: "Petrona_600SemiBold",
          marginTop: 10,
        }}
      >
        CLASSIC (240)
      </Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={item.tableSeats}
          numColumns={7}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => onSeatSelect(item)}
              style={{
                margin: 10,
                borderColor: "#3339FF",
                borderWidth: 0.5,
                borderRadius: 6,
              }}
            >
              {seats.includes(item) ? (
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    fontFamily: "Petrona_500Medium",
                    padding: 7,
                    color: "#fff",
                    backgroundColor: "#3339FF",
                  }}
                >
                  {item}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    fontFamily: "Petrona_500Medium",
                    padding: 7,
                  }}
                >
                  {item}
                </Text>
              )}
            </Pressable>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 75,
            marginTop: 20,
            backgroundColor: "#d8d8d8",
            padding: 10,
          }}
        >
          <View>
            <FontAwesome
              name="square"
              size={24}
              color="#3339FF"
              style={{ textAlign: "center", marginBottom: 4 }}
            />
            <Text style={{ fontSize: 15, fontFamily: "Petrona_600SemiBold" }}>
              Selected
            </Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <FontAwesome
              name="square"
              size={24}
              color="white"
              style={{ textAlign: "center", marginBottom: 4 }}
            />
            <Text style={{ fontSize: 15, fontFamily: "Petrona_600SemiBold" }}>
              Vacant
            </Text>
          </View>
          <View>
            <FontAwesome
              name="square"
              size={24}
              color="#989898"
              style={{ textAlign: "center", marginBottom: 4 }}
            />
            <Text style={{ fontSize: 15, fontFamily: "Petrona_600SemiBold" }}>
              Occupied
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 14,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text
              style={{
                marginBottom: 4,
                fontSize: 15,
                fontFamily: "Petrona_600SemiBold",
              }}
            >
              Show end time approx 6:51pm
            </Text>
            {seats.length > 0 ? (
              showSeats()
            ) : (
              <Text
                style={{
                  marginBottom: 4,
                  fontSize: 15,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                No Seats Selected
              </Text>
            )}
          </View>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              padding: 10,
              borderTopLeftRadius: 6,
              borderBottomLeftRadius: 6,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                width: 110,
                fontSize: 14,
                fontFamily: "Petrona_500Medium",
              }}
            >
              Now with ticket cancellation
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: "#3339FF",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          {seats.length > 0 ? (
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Petrona_700Bold",
                color: "#ffff",
              }}
            >
              {seats.length} seats selected
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text></Text>
          <Pressable
            onPress={() => paystackWebViewRef.current.startTransaction()}
          >
            <Text
              style={{
                fontSize: 17,
                fontFamily: "Petrona_700Bold",
                color: "#ffff",
              }}
            >
              PAY &#8358;{total}
            </Text>
          </Pressable>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({});
