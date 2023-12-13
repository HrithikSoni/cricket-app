import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import useAuth from "../../hooks/useAuth";
// import { logoutUser } from "../services/store/reducers/authReducer";

const Profile = () => {
  const { deleteUserData } = useAuth();

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 100 }}
    >
      <Button label={"Logout"} onButtonPress={deleteUserData} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
