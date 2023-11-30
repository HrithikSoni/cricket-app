import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import UTILS from "../../utils";

const SelectTeamCard = (props) => {
  return (
    <TouchableOpacity onPress={props?.onCardPress}>
      <View style={styles.container}>
        <View style={UTILS.STYLES.rowCenter}>
          <Image source={props?.mainImage} style={styles.mainImgStyle} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>{props?.name}</Text>
            <Text style={styles.discpStyle}>{props?.discp}</Text>
          </View>
        </View>
        <View style={styles.playersImgTextCon}>
          {props?.player1Image && (
            <View style={styles.playersImgCon}>
              <Image source={props?.player1Image} style={styles.playerImage} />
              <Image
                source={props?.player2Image}
                style={[
                  styles.playerImage,
                  { position: "absolute", marginLeft: -20 },
                ]}
              />
              <Image
                source={props?.player3Image}
                style={[
                  styles.playerImage,
                  { position: "absolute", marginLeft: 20 },
                ]}
              />
            </View>
          )}
          <Text>{props?.rightText}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: UTILS.COLORS.gray1
  },
  playerImage: {
    height: 25,
    width: 25,
    borderRadius: 20,
    borderColor: UTILS.COLORS.themeColor,
    borderWidth: 2,
  },
  mainImgStyle: {
    height: 55,
    width: 55,
    borderRadius: 20,
  },
  discpStyle: { fontSize: 13, color: UTILS.COLORS.gray2 },
  playersImgTextCon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 30,
  },
  playersImgCon: { flexDirection: "row", position: "relative" },
});

export default SelectTeamCard;
