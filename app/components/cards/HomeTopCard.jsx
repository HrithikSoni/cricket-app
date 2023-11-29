import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

import { TAB_SCREENS } from "../../utils/constants/screenNames";
import Icons from "../icons";
import useAuth from "../../hooks/useAuth";
import UTILS from "../../utils";

const HomeTopCard = (props) => {
  const navigation = useNavigation();
  const { userFirstName } = useAuth();

  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.userDp} />
        <View>
          <Text style={{ fontSize: 17, lineHeight: 24, fontWeight: "700" }}>
            Hey {userFirstName}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: UTILS.STYLES.colors.gray2,
              lineHeight: 16,
              fontWeight: "400",
              marginTop: 5,
            }}
          >
            Welcome to Scoring
          </Text>
        </View>
      </View>
      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(TAB_SCREENS.PROFILE)}
        >
          <Icons.NotificationIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTopCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  userDp: {
    height: 60,
    width: 60,
    borderRadius: 25,
    backgroundColor: UTILS.STYLES.colors.gray1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
