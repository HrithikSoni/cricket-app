import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import colors from "../constants/colors";

const AppSwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
      {!isEnabled && props.fun();}
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: colors.themeColor }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppSwitch;
