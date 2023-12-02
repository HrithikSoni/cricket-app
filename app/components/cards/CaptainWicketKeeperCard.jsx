import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import UTILS from "../../utils";
import BoldText from "../text/BoldText";
import SmallGreyText from "../text/SmallGreyText";
import NumberChip from "../others/NumberChip";
import useManageTeam from "../../hooks/useManageTeam";
import Icons from "../others/Icons";

function CaptainWicketKeeperCard(props) {
  const isCaptain = props.captainWicketKeeper.captain.id === props.id;
  const isWicketKeeper = props.captainWicketKeeper.wicketKeeper.id === props.id;

  let container = styles.container;

  const selected = {
    borderWidth: 3,
    borderColor: UTILS.COLORS.themeColor,
  };

  if (isCaptain || isWicketKeeper) {
    container = { ...container, ...selected };
  }

  function handleOnPress() {
    props.assignRole({ id: props.id, name: props.name });
  }

  return (
    <TouchableOpacity style={container} onPress={handleOnPress}>
      <View style={styles.imageContainer}>
        <NumberChip number={props.serialNo} style={styles.chipStyle} />
      </View>
      <View style={styles.manageOrderContainer}>
        <View style={styles.playerDetails}>
          <BoldText>{props.name}</BoldText>
          <SmallGreyText>{props.type}</SmallGreyText>
        </View>
        <View>
          {isCaptain && <BoldText style={styles.postText}>Captain</BoldText>}
          {isWicketKeeper && (
            <BoldText style={styles.postText}>Wicketkeeper</BoldText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CaptainWicketKeeperCard;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
    marginVertical: 5,
    ...UTILS.STYLES.border,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 14,
    ...UTILS.STYLES.border,
  },
  playerDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-evenly",
    height: 50,
    // backgroundColor: "red",
  },
  chipStyle: {
    position: "absolute",
    top: -5,
    right: -5,
  },

  manageOrderContainer: {
    flex: 1,
    // backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowContainer: {
    flexDirection: "row",
  },

  postText: { fontSize: 12, color: UTILS.COLORS.themeColor },
});
