import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import ImageWithTextCard from "../../components/cards/ImageWithTextCard";
import AppText from "../../components/text/AppText";
import ParentWrapper from "../../components/wrappers/ParentWrapper";

const MatchToss = () => {
  const tossData = useRef({});

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
      <Button label={"Confirm"} onButtonPress={() => {}} bottom={true} />
    </ParentWrapper>
  );
};

function TossOptionSelector(props) {
  const [selected, setSelected] = useState(null);

  function handleSelect(id) {
    setSelected(id);
    props.onSelect(id);
  }

  return (
    <>
      <AppText style={[styles.text]}>{props.name}</AppText>
      <View style={[styles.cardContainer]}>
        {props.data.map((item, index) => (
          <ImageWithTextCard
            {...item}
            key={index}
            selected={selected == item.id}
            onPress={() => handleSelect(item.id)}
          />
        ))}
      </View>
    </>
  );
}

const teamInfo = [
  {
    id: 1,
    imgUrl: require("../../../assets/cricket-team.png"),
    label: "Team A",
    value: "TEAM_A",
  },
  {
    id: 2,
    imgUrl: require("../../../assets/cricket-team.png"),
    label: "Team B",
    value: "TEAM_B",
  },
];

const tossInfo = [
  {
    id: 1,
    imgUrl: require("../../../assets/bat.png"),
    label: "Bat",
    value: "BAT",
  },
  {
    id: 2,
    imgUrl: require("../../../assets/bowl.png"),
    label: "Bowl",
    value: "BALL",
  },
];

export default MatchToss;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    gap: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
  },
});
