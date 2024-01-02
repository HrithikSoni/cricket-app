import React from "react";
import "react-native-gesture-handler";

import { useGetAuthFromStore } from "../hooks/useAuth";
import AdminNavigator from "../routes/AdminNavigator";
import AuthNavigator from "../routes/AuthNavigator";
import UserNavigator from "../routes/UserNavigator";
import ROLE from "../utils/enum/role";
import Scoring from "./ScoringScreens/Scoring";
import ChooseInitialPlayers from "./ScoringScreens/ChooseInitialPlayers";

export default function Root() {
  const { role } = useGetAuthFromStore();
  return <AdminNavigator />;
  if (!role) return <AuthNavigator />;
  if (role == ROLE.ADMIN) return <AdminNavigator />;
  return <UserNavigator />;
}
