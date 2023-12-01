import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import UTILS from "../../utils";
import BoldText from "../text/BoldText";
import SmallGreyText from "../text/SmallGreyText";
import NumberChip from "../others/NumberChip";
import useManageTeam from "../../hooks/useManageTeam";
import Icons from "../others/Icons";

function PlayerManageCard(props) {
  const [itemSelected, setItemSelected] = useState(false);

  let container = styles.container;

  const selected = {
    backgroundColor: UTILS.COLORS.gray1,
    borderColor: "white",
  };

  if (itemSelected) {
    container = { ...container, ...selected };
  }

  function handleOnPress() {
    setItemSelected(!itemSelected);
    props.onPress();
  }

  const upColor =
    props.serialNo === 1 ? UTILS.COLORS.gray2 : UTILS.COLORS.themeColor;

  const downColor = props.last ? UTILS.COLORS.gray2 : UTILS.COLORS.themeColor;

  return (
    <View style={container} onPress={handleOnPress}>
      <View style={styles.imageContainer}>
        <NumberChip number={props.serialNo} style={styles.chipStyle} />
      </View>
      <View style={styles.manageOrderContainer}>
        <View style={styles.playerDetails}>
          <BoldText>{props.name}</BoldText>
          <SmallGreyText>{props.type}</SmallGreyText>
        </View>
        <View style={styles.arrowContainer}>
          <Icons.ArrowUp
            color={upColor}
            onPress={() => props.moveUp(props.serialNo - 1)}
          />
          <View style={{ width: 10 }} />
          <Icons.ArrowDown
            color={downColor}
            onPress={() => props.moveDown(props.serialNo - 1)}
          />
        </View>
      </View>
    </View>
  );
}
export default PlayerManageCard;

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
});
