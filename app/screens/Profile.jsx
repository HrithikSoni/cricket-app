import React from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";
import Button from "../components/button/Button";
import permanentStorage from "../services/permanentStorage";
import { logoutUser } from "../services/store/reducers/authReducer";

const Profile = () => {
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    dispatch(logoutUser());
    permanentStorage.deleteDetails(permanentStorage.userDetail);
  };

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 100 }}
    >
      <Button label={"Logout"} onButtonPress={handleButtonPress} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
