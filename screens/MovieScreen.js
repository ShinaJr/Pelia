import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import mallsData from "../assets/data/malls";
import { useRoute } from "@react-navigation/native";

const MovieScreen = ({ route, navigation }) => {
  const item1 = route.params;
  const [SelectedDate, setSelectedDate] = useState("");
  const [seatsData, setSeatsData] = useState([]); //here we'll be set the table data to the seats data to get the seat data in the theatre screen.
  const [mall, setMall] = useState([]);
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 15,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 17,
              fontFamily: "Petrona_700Bold",
            }}
          >
            {item1.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="search-outline" size={24} color="black" />
          <Ionicons
            style={{ marginHorizontal: 10 }}
            name="ios-filter-outline"
            size={24}
            color="black"
          />
          <Ionicons name="share-social-outline" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 13,
          flexDirection: "row",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <AntDesign name="Safety" size={24} color="orange" />
        <Text
          style={{
            marginLeft: 5,
            fontFamily: "Petrona_500Medium",
            fontSize: 15,
          }}
        >
          Your safety is our number one priority.
        </Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2023-02-01")}
        endDate={new Date("2023-02-22")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor={"#ececec"}
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <View>
        {mallsData.map((item, index) => (
          <Pressable
            onPress={() => {
              setMall(item.name);
              setSeatsData(item.tableData);
            }}
            key={index}
          >
            <Text
              style={{
                margin: 10,
                fontSize: 16,
                fontFamily: "Petrona_600SemiBold",
              }}
            >
              {item.name}
            </Text>
            {mall.includes(item.name) ? (
              <FlatList
                data={item.showTimes}
                numColumns={3}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Theatre", {
                        name: item1.name,
                        timeSelected: item,
                        mall: mall,
                        tableSeats: seatsData,
                      })
                    }
                    style={{
                      borderColor: "#3339FF",
                      borderWidth: 0.5,
                      width: 100,
                      marginVertical: 10,
                      alignItems: "center",
                      borderRadius: 5,
                      margin: 10,
                      padding: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#3339FF",
                        fontFamily: "Petrona_600SemiBold",
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </Text>
                  </Pressable>
                )}
              />
            ) : null}
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MovieScreen;
const styles = StyleSheet.create({});
