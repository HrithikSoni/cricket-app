import MATCH_TYPES from "../enum/matchTypes";

export default function oversByMatchType(name) {
  return MATCH_TYPES.find((i) => i.value === name);
}
