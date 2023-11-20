import { Platform } from "react-native";

function handlePlatform(iosConfig = {}, androidConfig = {}) {
  Platform.OS === "ios" ? iosConfig : androidConfig;
}
export default handlePlatform;
