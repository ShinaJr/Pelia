import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import DashedLine from "react-native-dashed-line";
import moment from "moment";
import SvgQRCode from "react-native-qrcode-svg";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useContext } from "react";
import { useEffect } from "react";
import { MoviesCards } from "../Context";

const TicketScreen = ({ route, navigation }) => {
  const item = route.params;
  const {ticket} = useContext(MoviesCards);
  useEffect(() => {
    const loadTicket = () =>{
      ticket.push(item)
    }
    loadTicket();
   
  }, [])
  
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          margin: 10,
          borderRadius: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Petrona_700Bold" }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 15, fontFamily: "Petrona_600SemiBold" }}>
            {item.selectedSeats.length}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Petrona_600SemiBold",
              color: "gray",
            }}
          >
            ENGLISH - 2D
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Petrona_600SemiBold",
              color: "red",
            }}
          >
            PELIA TICKET
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Petrona_600SemiBold",
            marginHorizontal: 10,
            marginTop: 9,
          }}
        >
          {item.mall}
        </Text>
        <View
          style={{
            margin: 10,
          }}
        >
          <DashedLine dashLength={5} dashColor="#dcdcdc" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Petrona_600SemiBold",
                color: "gray",
              }}
            >
              DATE & TIME
            </Text>
            <Text
              style={{
                marginVertical: 4,
                fontSize: 15,
                fontFamily: "Petrona_500Medium",
              }}
            >
              {item.timeSelected}
            </Text>
            <Text style={{ fontSize: 15, fontFamily: "Petrona_500Medium" }}>
              {moment(item.date).utc().format("MM/DD/YYYY")}
            </Text>
          </View>
          <ImageBackground
            source={item.image}
            style={{ aspectRatio: 4 / 2, height: 60, borderRadius: 6 }}
          />
        </View>
        <View
          style={{
            margin: 10,
          }}
        >
          <DashedLine dashLength={5} dashColor="#dcdcdc" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Petrona_700Bold",
              }}
            >
              AUDI NO
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontFamily: "Petrona_600SemiBold",
                marginTop: 6,
              }}
            >
              2
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Petrona_700Bold",
              }}
            >
              TICKETS
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontFamily: "Petrona_600SemiBold",
                marginTop: 6,
              }}
            >
              {item.selectedSeats.length}
            </Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Petrona_700Bold",
              }}
            >
              SEATS
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {item.selectedSeats.map((item, index) => (
                <Text
                  key={index}
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: "Petrona_600SemiBold",
                    margin: 3,
                    marginTop: 6,
                  }}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View
          style={{
            margin: 10,
          }}
        >
          <DashedLine dashLength={5} dashColor="#dcdcdc" />
        </View>
        <View
          style={{
            height: 160,
            backgroundColor: "#5D8AA8",
            borderRadius: 6,
            margin: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Petrona_700Bold",
                color: "white",
              }}
            >
              Price Details
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                0's Seat Convenience
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                &#8358;{item.priceValue}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                Convenience Fee
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                &#8358;{item.fee}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                Grand Total
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                &#8358;{item.total}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                ID No
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Petrona_600SemiBold",
                }}
              >
                FGDHVS898PA
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            margin: 10,
          }}
        >
          <DashedLine dashLength={5} dashColor="#dcdcdc" />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // marginTop: 10,
            // marginBottom: 20,
          }}
        >
          <SvgQRCode value={"Hello"} />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Petrona_600SemiBold",
            textAlign: "center",
          }}
        >
          SWHDVDD9076
        </Text>
        <View
          style={{
            margin: 10,
          }}
        >
          <DashedLine dashLength={5} dashColor="#dcdcdc" />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#3339FF",
            marginLeft: "auto",
            marginRight: "auto",
            width: 120,
            marginTop:70,
            borderRadius: 4,
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontFamily: "Petrona_600SemiBold",
            }}
          >
            Home
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({});
