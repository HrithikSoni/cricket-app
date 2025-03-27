import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import ImageWithTextCard from "../../components/cards/ImageWithTextCard";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import UTILS from "../../utils";
import useRTKQuery from "../../hooks/useRTKQuery";
import api from "../../services/api";

const MatchToss = ({ navigation, route }) => {
  const { teamA, teamB, id: matchId } = route.params;
  const tossData = useRef({ matchId });

  const { request } = useRTKQuery(api.useAddTossDecisionMutation, () =>
    navigation.navigate(UTILS.SCREEN_NAMES.NAV_SCREENS.BOTTOM_TAB_NAVIGATOR)
  );

  const teamInfo = [
    {
      id: teamA[0].id,
      imgUrl: require("../../../assets/cricket-team.png"),
      label: teamA[0].name,
      value: teamA[0].id,
    },
    {
      id: teamB[0].id,
      imgUrl: require("../../../assets/cricket-team.png"),
      label: teamB[0].name,
      value: teamB[0].id,
    },
  ];

  return (
    <ParentWrapper screenTitle={"Toss"}>
      <TossOptionSelector
        name={"Won By"}
        data={teamInfo}
        onSelect={(e) => (tossData.current.wonBy = e)}
      />

      <TossOptionSelector
        name={"Choose To"}
        data={tossInfo}
        onSelect={(e) => (tossData.current.chooseTo = e)}
      />
      <Button
        label={"Confirm"}
        onButtonPress={() => request(tossData.current)}
        bottom={true}
      />
    </ParentWrapper>
  );
};

function TossOptionSelector(props) {
  const [selected, setSelected] = useState(null);

  function handleSelect(value) {
    setSelected(value);
    props.onSelect(value);
  }

  return (
    <>
      <AppText style={[styles.text]}>{props.name}</AppText>
      <View style={[styles.cardContainer]}>
        {props.data.map((item, index) => (
          <ImageWithTextCard
            {...item}
            key={index}
            selected={selected == item.value}
            onPress={() => handleSelect(item.value)}
          />
        ))}
      </View>
    </>
  );
}

const tossInfo = [
  {
    id: 1,
    imgUrl: require("../../../assets/bat.png"),
    label: "Bat",
    value: "BATTING",
  },
  {
    id: 2,
    imgUrl: require("../../../assets/bowl.png"),
    label: "Bowl",
    value: "BOWLING",
  },
];

export default MatchToss;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    // gap: 30,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
  },
});
