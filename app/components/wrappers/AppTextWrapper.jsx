import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import UTILS from "../../utils";

SplashScreen.preventAutoHideAsync();

export default function AppText({children, ...props}) {
  const [fontsLoaded] = useFonts({
    "Euclid-Medium": require("../../../assets/fonts/euclid/euclid-med.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text
        style={{
          fontFamily: "Euclid-Medium",
          fontSize: props?.fontWeight || 17,
          fontWeight: props?.fontWeight || "500",
          lineHeight: props?.lineHeight || 24,
          color: props?.color || UTILS.STYLES.colors.gray2,
          marginLeft: 10
        }}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
