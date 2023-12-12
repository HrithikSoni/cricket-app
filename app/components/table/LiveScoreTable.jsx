import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TableRow from "./TableRow";
import TableHeaderContainer from "./TableHeaderContainer";
import UTILS from "../../utils";
import AppText from "../text/AppText";

const style = UTILS.STYLES;
const colors = UTILS.COLORS;

export default function LiveScoreTable(props) {
  return (
    <View style={styles.container}>
      <TableHeaderContainer>
        <TableRow {...props.batsManHeaderRowData} />
      </TableHeaderContainer>
      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {props?.tableData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>

      <TableRow
        title="Bowler"
        data={["O", "M", "R", "W", "Eco"]}
        {...props.bowlerHeaderStyle}
      />

      <View style={{ backgroundColor: UTILS.COLORS.gray1 }}>
        {props?.tableData.map((e, i) => (
          <TableRow {...e} key={i} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
