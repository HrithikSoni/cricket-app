export const ENGINE_ACTIONS = {
  VALID_DELIVERY: {
    BOUNDARY:
      "$Add runs scored in delivery to over all team score. $Update over all stats of batsman, add in bowls played by batsman update boundary stats in case of 4 and 6",

    UPDATE_BATSMAN_STAT:
      "Update over all stats of batsman, add in bowls played by batsman update boundary stats in case of 4 and 6",
    UPDATE_BOWLER_STAT:
      "Update over all stats of bowler, add in bowls delivered by bowler update boundary stats in case of 4 and 6",
  },

  INVALID_DELIVERY: {},
  undo: {
    score: "bowler batsman stat",
  },
};

export function ScoreEngine(scoreDetails, bowlDetails) {}
