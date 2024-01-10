import { useSelector } from "react-redux";
import UTILS from "../../../../utils";

export function useValidBowlerSelector() {
  const { playingFielders, totalBalls } = useSelector((s) => s.scoring);
  const overs = Math.floor(totalBalls / 6);
  let invalidBowlers = [];
  //$$$$$$$$$$ over limit for bowler
  playingFielders.forEach((i, index) => {
    overs == i.overs[i.overs.length - 1] || i.overs.length > 3
      ? invalidBowlers.push(index)
      : null;
  });
  return { invalidBowlers, playingFielders };
}

export function useScoreDetailsSelector() {
  const data = useSelector((state) => state.scoring);
  const overs = Math.floor(data.totalBalls / 6);
  const isFirstInning = data.currentInning === UTILS.INNING_TYPES.FIRST;
  return { ...data, isFirstInning, overs };
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
  const { batsmen, bowlers, striker, nonStriker, bowler } = useSelector(
    (state) => state.scoring
  );

  const batsmanStats = [striker, nonStriker, ...batsmen].map(
    (batsman, index) => {
      const sr = (batsman.totalRun / batsman.ballsPlayed).toFixed(1);

      return {
        title: batsman.name,
        subTitle: null,
        data: [
          batsman.totalRun,
          batsman.ballsPlayed,
          batsman[4],
          batsman[6],
          sr,
        ],
      };
    }
  );

  const otherBowlers = bowlers.filter((i) => i.id !== bowler.id);
  const bowlerStats = [bowler, ...otherBowlers].map((bowler, index) => {
    const economy = (bowler.totalRun / bowler.overs.length).toFixed(1);

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

export function useCurrentBatsmanStatsSelector() {
  return useSelector((state) => state.scoring);
}

export function useBallsLeftInInningSelector() {
  const { ballsPerInning, totalBalls } = useSelector((state) => state.scoring);
  return {
    ballsLeft: ballsPerInning - totalBalls,
    inningComplete: ballsPerInning - totalBalls === 0,
  };
}
