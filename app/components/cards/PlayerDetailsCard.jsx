import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import UTILS from "../../utils";
import BoldText from "../../components/text/BoldText";
import SmallGreyText from "../text/SmallGreyText";
import useManageTeam from "../../hooks/useManageTeam";

function PlayerDetailsCard(props) {
  const { teamMembers } = useManageTeam();
  const playerIsSelected = teamMembers.filter((i) => i.id === props.id);
  const [itemSelected, setItemSelected] = useState(playerIsSelected.length > 0);

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

  return (
    <TouchableOpacity style={container} onPress={handleOnPress}>
      <View style={styles.imageContainer} />
      <View style={styles.playerDetails}>
        <BoldText>{props.name}</BoldText>
        <SmallGreyText>{props.type}</SmallGreyText>
      </View>
    </TouchableOpacity>
  );
}
export default PlayerDetailsCard;

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
    marginLeft: 12,
    justifyContent: "space-evenly",
  },
});
