import React from "react";
import { StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import TableHeaderContainer from "./TableHeaderContainer";
import TableRow from "./TableRow";

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
