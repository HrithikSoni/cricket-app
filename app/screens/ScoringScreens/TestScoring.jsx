import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import {
  useAddScore,
  useScoreDetails,
} from "../../services/scoringServices/useScoring";

const scores = [0, 1, 2, 3, 4, 5, 6];

const TestScoring = () => {
  const d = useScoreDetails();
  const overs = d.totalBalls < 6 ? 0 : Math.floor(d.totalBalls / 6);
  const ballsLeftInOver =
    d.totalBalls < 6 ? 6 - d.totalBalls : 6 - (d.totalBalls % 6);

  const ballOfCurrentOvers = d.totalBalls % 6;

  const addRuns = useAddScore();
  return (
    <View style={{ paddingTop: 50 }}>
      <Text style={{ fontSize: 20 }}>score:{d.currentScore}</Text>
      <Text style={{ fontSize: 20 }}>
        overs:{overs} bowl:{ballOfCurrentOvers}
      </Text>
      {/* <Text style={{ fontSize: 20 }}>balls left in over:{ballsLeftInOver}</Text> */}
      <Text style={{ fontSize: 20 }}>Striker:{d.striker}</Text>
      <Text style={{ fontSize: 20 }}>Non striker:{d.nonStriker}</Text>

      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          {scores.map((item) => (
            <TouchableOpacity
              key={item}
              style={{ backgroundColor: "green", padding: 10, margin: 5 }}
              onPress={() => addRuns(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TestScoring;

const styles = StyleSheet.create({});
