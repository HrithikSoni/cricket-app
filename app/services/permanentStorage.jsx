import * as SecureStore from "expo-secure-store";

const userDetail = "userdetail";

async function saveDetails(key, detail) {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(detail));
  } catch (error) {
    console.warn("Error saving user detail:", error);
  }
}

async function deleteDetails(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.warn("Error deleting user detail:", error);
  }
}

async function getDetails(key) {
  try {
    const data = await SecureStore.getItemAsync(key);
    return JSON.parse(data);
  } catch (error) {
    console.warn("Error retrieving user detail:", error);
  }
}

const permanentStorage = { saveDetails, getDetails, deleteDetails, userDetail };

export default permanentStorage;
