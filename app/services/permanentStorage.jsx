import * as SecureStore from "expo-secure-store";

export const userDetail = "userdetail";
export const notificationData = "notificationData";

export async function save(key, detail) {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(detail));
  } catch (error) {
    console.log("Error saving user detail:", error);
  }
}

export async function deleteDetails(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error deleting user detail:", error);
  }
}

export async function get(key) {
  try {
    const data = await SecureStore.getItemAsync(key);
    return JSON.parse(data);
  } catch (error) {
    console.log("Error retrieving user detail:", error);
  }
}

const permanentStorage = {};

export default permanentStorage;
