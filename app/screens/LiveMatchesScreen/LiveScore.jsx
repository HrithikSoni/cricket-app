import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { io } from "socket.io-client";

import TeamScoreCard from "../../components/cards/TeamScoreCard";
import LiveScoreTable from "../../components/table/LiveScoreTable";
import { URL } from "../../services/api";

const socket = io(URL);

const LiveScore = (props) => {
  useEffect(() => {
    handleGetScore();
  }, []);

  function handleGetScore() {
    socket.emit("findAllLiveScoring", {}, (r) => console.log(r, "received"));
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TeamScoreCard {...currentInningTeamData} />
        <TeamScoreCard {...teamData} />
        <LiveScoreTable
          tableData={tableData}
          batsManHeaderRowData={batsManHeaderRowData}
          bowlerHeaderStyle={bowlerHeaderStyle}
        />
      </View>
    </View>
  );
};

export default LiveScore;

const tableData = [
  { title: "name", subTitle: null, data: [1, 2, 3, 4, 5] },
  { title: "new Team", subTitle: "game", data: [12, 24, 35, 0, 50] },
];

const batsManHeaderRowData = {
  title: "Batsman",
  data: ["R", "B", "4s", "6s", "RS"],
  textStyle: { color: "white" },
  titleStyle: { color: "white" },
};

const bowlerHeaderStyle = {
  titleStyle: { color: "black" },
  textStyle: { color: "black" },
  containerStyle: { backgroundColor: "white", paddingVertical: 20 },
};

const currentInningTeamData = {
  imgUrl: require("../../../assets/cricket-team.png"),
  teamName: "New Delhi Heroes",
  score: "173/8",
};

const teamData = {
  imgUrl: require("../../../assets/cricket-team-1.png"),
  teamName: "KC Riders",
  score: "(18.2/20 ov T:174) 142",
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
  },
});

// import React from "react";
// import { StyleSheet, View } from "react-native";

// import TeamScoreCard from "../../components/cards/TeamScoreCard";
// import LiveScoreTable from "../../components/table/LiveScoreTable";

// const LiveScore = (props) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <TeamScoreCard {...currentInningTeamData} />
//         <TeamScoreCard {...teamData} />
//         <LiveScoreTable
//           tableData={tableData}
//           batsManHeaderRowData={batsManHeaderRowData}
//           bowlerHeaderStyle={bowlerHeaderStyle}
//         />
//       </View>
//     </View>
//   );
// };

// export default LiveScore;

// const tableData = [
//   { title: "name", subTitle: null, data: [1, 2, 3, 4, 5] },
//   { title: "new Team", subTitle: "game", data: [12, 24, 35, 0, 50] },
// ];

// const batsManHeaderRowData = {
//   title: "Batsman",
//   data: ["R", "B", "4s", "6s", "RS"],
//   textStyle: { color: "white" },
//   titleStyle: { color: "white" },
// };

// const bowlerHeaderStyle = {
//   titleStyle: { color: "black" },
//   textStyle: { color: "black" },
//   containerStyle: { backgroundColor: "white", paddingVertical: 20 },
// };

// const currentInningTeamData = {
//   imgUrl: require("../../../assets/cricket-team.png"),
//   teamName: "New Delhi Heroes",
//   score: "173/8",
// };

// const teamData = {
//   imgUrl: require("../../../assets/cricket-team-1.png"),
//   teamName: "KC Riders",
//   score: "(18.2/20 ov T:174) 142",
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     marginVertical: 10,
//   },
// });
