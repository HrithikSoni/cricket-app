import { store } from "../../store";
import {
  handleAssignBowler,
  handleDismissBatsman,
  handleResetCurrentOver,
} from "../scoringReducer";

export function useDispatchResetCurrentOver() {
  return function () {
    store.dispatch(handleResetCurrentOver());
  };
}

export function useAssignBowler() {
  return function (bowlerId) {
    store.dispatch(handleAssignBowler({ bowlerId }));
  };
}

export function useAssignStrikerNonStriker() {
  return function (bowlerId) {
    store.dispatch(handleAssignBowler({ bowlerId }));
  };
}

export function useDismissBatsman() {
  return function (type) {
    store.dispatch(handleDismissBatsman({ type }));
  };
}

// export function use() {
//   return function (type) {
//     store.dispatch(handleDismissBatsman({ type }));
//   };
// }
