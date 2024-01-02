import { useSelector } from "react-redux";

export function useCurrentOverDetailsSelector() {
  // return useSelector((state) => state.scoring.currentOver);
  return [];
}

export function useValidBowlerSelector() {
  const { playingFielders, totalBalls } = useSelector((s) => s.scoring);
  const overs = Math.floor(totalBalls / 6);
  let invalidBowlers = [];
  //$$$$$$$$$$ over limit for bowler
  playingFielders.forEach((i, index) =>
    overs == i.overs[i.overs.length - 1] ? invalidBowlers.push(index) : null
  );
  return { invalidBowlers, playingFielders };
}

export function useScoreDetails() {
  const {
    currentScore,
    wickets,
    totalBalls,
    striker,
    nonStriker,
    playingBatsman,
    bowler,
    playingFielders,
  } = useSelector((state) => state.scoring);
  const overs = Math.floor(totalBalls / 6);
  const ballsInCurrentOver = totalBalls % 6;
  const bowlerStat = playingFielders.find((i) => i.id == bowler.id);

  return {
    currentScore,
    wickets,
    overs,
    ballsInCurrentOver,
    striker: striker,
    nonStriker: nonStriker,
    playingBatsman,
    bowler,
    bowlerStat,
    playingFielders,
  };
}

export function usePlayerSelector() {
  const { playingBatsman, playingFielders } = useSelector(
    (state) => state.scoring
  );

  return {
    playingBatsman,
    playingFielders,
  };
}

export function useMatchStatsSelector() {
  const { playingBatsman, playingFielders } = useSelector(
    (state) => state.scoring
  );

  const batsmanStats = playingBatsman.map((batsman, index) => {
    const sr = (batsman.totalRun / batsman.ballsPlayed).toFixed(1);

    return {
      title: batsman.name,
      subTitle: null,
      data: [batsman.totalRun, batsman.ballsPlayed, batsman[4], batsman[6], sr],
    };
  });

  const bowlerStats = playingFielders
    .filter((i) => i.overs.length !== 0) // filter bowlers who have bowled
    .map((bowler, index) => {
      const economy = (bowler.totalRun / bowler.overs.length).toFixed(1);
      console.log(bowler.overs, bowler.name);
      return {
        title: bowler.name,
        subTitle: null,
        data: [
          bowler.overs.length,
          bowler.maiden,
          bowler.totalRun,
          bowler.wickets,
          economy,
        ],
      };
    });

  return { batsmanStats, bowlerStats };
}
