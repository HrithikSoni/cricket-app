import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import UTILS from "../../utils";

const COLORS = UTILS.STYLES.colors;
const MatchCard = () => {
  const matchDetails = [
    {
      name: "Mumbai Vs Delhi",
      format: "T20",
      discp: "Match let's Watch",
      backgroundImage: require("../../../assets/cricket.png"),
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  ];

  return (
    <View style={styles.container}>
      {matchDetails.map((item, index) => (
        <ImageBackground
          key={index}
          source={item.backgroundImage}
          style={styles.card}
          imageStyle={styles.imageBackground}
        >
          <View
            style={[
              styles.cardContent,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <Text
              style={{ fontSize: 20, color: UTILS.STYLES.colors.textColor }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 15, color: UTILS.STYLES.colors.gray1 }}>
              {item.format}
            </Text>
            <Text style={{ fontSize: 15, color: UTILS.STYLES.colors.gray1 }}>
              {item.discp}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Check Score</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    width: 250,
    height: 166,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  imageBackground: {
    resizeMode: "cover",
    justifyContent: "center",
    transform: [{ rotate: "15deg" }],
  },
  cardContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 5,
    padding: 20,
  },
  button: {
    height: 43,
    width: 115,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: UTILS.STYLES.colors.buttonBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: UTILS.STYLES.colors.textColor,
    fontSize: 15,
  },
});

export default MatchCard;
