import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TableRow from "./TableRow";
import TableHeaderContainer from "./TableHeaderContainer";
import UTILS from "../../utils";

export default function LiveScoreTable() {
  const tableData = [
    { title: "name", subTitle: null, data: [1, 2, 3, 4, 5] },
    { title: "new Team", subTitle: "game", data: [12, 24, 35, "00:00", 50] },
  ];
  return (
    <View>
      <TableHeaderContainer>
        <TableRow
          title={"Batsman"}
          data={["R", "B", "4s", "6s", "RS"]}
          textStyle={{ color: "white" }}
          titleStyle={{ color: "white" }}
        />
      </TableHeaderContainer>
      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {tableData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>

      <TableRow title="Bowler" data={["O", "M", "R", "W", "Eco"]} />

      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {tableData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
