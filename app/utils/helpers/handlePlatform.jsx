import { Platform } from "react-native";

function handlePlatform(iosConfig = {}, androidConfig = {}) {
 return Platform.OS === "ios" ? iosConfig : androidConfig;
}
export default handlePlatform;
