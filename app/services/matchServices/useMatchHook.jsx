import { useDispatch, useSelector } from "react-redux";

export default function useMatchHooks() {
  const dispatch = useDispatch;
}

export const useGetCurrentTeamDetails = () => {
  return useSelector((state) => state.match.currentTeamDetails);
};
