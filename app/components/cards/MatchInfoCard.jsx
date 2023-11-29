import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import UTILS from "../../utils";

const MatchInfoCard = () => {
  const teamInfo = [
    {
      mainImage: require("../../../assets/cricket-team.png"),
      name: "Delhi Heroes",
      discp: "Rajouri Garden",
      rightText: "25 players",
      player1Image: require("../../../assets/player-1.png"),
      player2Image: require("../../../assets/player-2.png"),
      player3Image: require("../../../assets/player-3.png"),
    },
  ];

  return (
    <View>
      {teamInfo.map((item, index) => (
        <View key={index} style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item.mainImage}
              style={{ height: 55, width: 55, borderRadius: 20 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ fontSize: 13, color: UTILS.COLORS.gray2 }}>
                {item.discp}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              gap: 30,
            }}
          >
            {item.player1Image && (
              <View style={{ flexDirection: "row", position: "relative" }}>
                <Image source={item.player1Image} style={styles.playerImage} />
                <Image
                  source={item.player2Image}
                  style={[
                    styles.playerImage,
                    { position: "absolute", marginLeft: -20 },
                  ]}
                />
                <Image
                  source={item.player3Image}
                  style={[
                    styles.playerImage,
                    { position: "absolute", marginLeft: 20 },
                  ]}
                />
              </View>
            )}
            <Text>{item.rightText}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: 360,
    borderRadius: 25,
    // backgroundColor: colors.gray1,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderWidth: 0.5,
  },
  playerImage: {
    height: 25,
    width: 25,
    borderRadius: 20,
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
  },
});

export default MatchInfoCard;
